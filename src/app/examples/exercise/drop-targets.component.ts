import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drop-targets',
  templateUrl: './drop-targets.component.html',
  styleUrls: ['./drop-targets.component.scss']
})
export class DropTargetsComponent implements OnInit {
  @ViewChild('graphContainer', null) graphContainer: ElementRef;

  graph: mxGraph;

  constructor() { }

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

      this.graph.insertVertex(parent, null, this.CONTAINER_STYLE, 0, 0, 100, 100, this.CONTAINER_STYLE);
      this.graph.insertVertex(parent, null, this.CONTAINER_STYLE, 100, 0, 100, 100, this.CONTAINER_STYLE);
      this.graph.insertVertex(parent, null, this.ITEM_STYLE, 200, 150, 80, 50, this.ITEM_STYLE);
      this.graph.insertVertex(parent, null, this.DEFAULT_STYLE, 290, 150, 80, 50, this.DEFAULT_STYLE);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }

  setConfig(graph: mxGraph): void {
    graph.setDropEnabled(true);
  }

  setOverrides(graph: mxGraph): void {
    let self = this;
    graph.isValidDropTarget = function (cell, cells, evt) {
      if (cell) {
        if (cell.style) {
          if (cell.style === self.CONTAINER_STYLE) {
            return cells[0].style === self.ITEM_STYLE;
          }
        }
      }
      return false;
    };
  }

  DEFAULT_STYLE = "default-style";
  ITEM_STYLE = "item-style";
  CONTAINER_STYLE = "container-style";
  setStyles(graph: mxGraph): void {
    let style = graph.getStylesheet().getDefaultVertexStyle();

    style = mxUtils.clone(style);
    style[mxConstants.STYLE_FILLCOLOR] = '#ff3f3f';
    style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_DASHED] = true;
    graph.getStylesheet().putCellStyle(this.ITEM_STYLE, style);

    style = [];
    style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_FONTCOLOR] = 'black';
    graph.getStylesheet().putCellStyle(this.CONTAINER_STYLE, style);
  }
}
