import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { mxHtmlLabelService } from './services/mx-html-label.service';

@Component({
  selector: 'app-html-labels',
  templateUrl: './html-labels.component.html',
  styleUrls: ['./html-labels.component.scss']
})
export class HtmlLabelsComponent implements OnInit {
  @ViewChild('graphContainer', null) graphContainer: ElementRef;

  graph: mxGraph;

  constructor(
    private _mxHtmlLabelService: mxHtmlLabelService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadGraph();
  }

  loadGraph(): void {
    const graphContainer = this.graphContainer.nativeElement;
    this.graph = new mxGraph(graphContainer);

    this.setConfig(this.graph);
    this.setOverrides(this.graph);
    this.setStyles(this.graph);

    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();

      let value3: Person = {
        firstName: 'Michael',
        lastName: 'Stevens',
        age: 32
      };

      this.graph.insertVertex(parent, null, this.DEFAULT_STYLE, 10, 10, 150, 30, this.DEFAULT_STYLE);
      this.graph.insertVertex(parent, null, value3, 200, 150, 160, 50, this.PERSON_STYLE);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }

  setConfig(graph: mxGraph): void {
    // Enables HTML labels
    graph.setHtmlLabels(true);
  }

  setOverrides(graph: mxGraph): void {
    let self = this;

    const oldGetLabel = graph.getLabel;
    graph.getLabel = function (cell) {
      if (this.getModel().isVertex(cell)) {
        switch (cell.style) {
          case self.PERSON_STYLE:
            // Return an HTML string and it will be rendered as such
            let personValue: Person = cell.value;
            return self._mxHtmlLabelService.getPersonHtml(personValue.firstName, personValue.lastName);
          default:
            return oldGetLabel.apply(this, arguments);
        }
      }
    };
  }

  DEFAULT_STYLE = "default-style";
  PERSON_STYLE = "person-style";
  setStyles(graph: mxGraph): void {
    let style = graph.getStylesheet().getDefaultVertexStyle();

    style = mxUtils.clone(style);
    // Overflow fill must be applied so the HTML will fill the cell
    style[mxConstants.STYLE_OVERFLOW] = 'visible';
    style[mxConstants.STYLE_STROKECOLOR] = 'none';
    style[mxConstants.STYLE_FILLCOLOR] = 'transparent';
    graph.getStylesheet().putCellStyle(this.PERSON_STYLE, style);
  }
}
