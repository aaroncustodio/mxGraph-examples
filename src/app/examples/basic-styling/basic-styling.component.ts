import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic-styling',
  templateUrl: './basic-styling.component.html',
  styleUrls: ['./basic-styling.component.scss']
})
export class BasicStylingComponent implements OnInit {
  @ViewChild('graphContainer', null) graphContainer: ElementRef;

  graph: mxGraph;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadGraph();
  }

  loadGraph() {
    const graphContainer = this.graphContainer.nativeElement;
    this.graph = new mxGraph(graphContainer);

    this.graph.setConnectable(true);

    // Set cell styles
    this.setStyles(this.graph);

    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();

      // Insert vertices
      var v1 = this.graph.insertVertex(parent, null, this.CELL_STYLE_1, 20, 20, 80, 30, this.CELL_STYLE_1);
      var v2 = this.graph.insertVertex(parent, null, this.CELL_STYLE_1, 20, 60, 80, 30, this.CELL_STYLE_1);
      var v3 = this.graph.insertVertex(parent, null, this.DEFAULT_STYLE, 200, 150, 80, 30, this.DEFAULT_STYLE);
      var v4 = this.graph.insertVertex(parent, null, this.CELL_STYLE_2, 100, 150, 80, 30, this.CELL_STYLE_2);

      // Insert edges
      this.graph.insertEdge(parent, null, '', v1, v2, this.EDGE_STYLE);
      this.graph.insertEdge(parent, null, '', v3, v4);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }

  DEFAULT_STYLE = "default-style";
  CELL_STYLE_1 = "style-1";
  CELL_STYLE_2 = "style-2";
  EDGE_STYLE = "edge-style";
  setStyles(graph: mxGraph) {
    let style = graph.getStylesheet().getDefaultVertexStyle();

    style = mxUtils.clone(style);
    style[mxConstants.STYLE_FILLCOLOR] = '#ff3f3f';
    style[mxConstants.STYLE_FONTCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_FONTSIZE] = 16;
    style[mxConstants.STYLE_DASHED] = true;
    graph.getStylesheet().putCellStyle(this.CELL_STYLE_1, style);

    style = [];
    style[mxConstants.STYLE_RESIZABLE] = 0;
    style[mxConstants.STYLE_MOVABLE] = 0;
    style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_FONTCOLOR] = 'black';
    graph.getStylesheet().putCellStyle(this.CELL_STYLE_2, style);

    style = [];
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.OrthConnector;
    style[mxConstants.STYLE_STROKECOLOR] = '#E83E8C';
    style[mxConstants.STYLE_DASHED] = 'true';
    graph.getStylesheet().putCellStyle(this.EDGE_STYLE, style);
  }
}
