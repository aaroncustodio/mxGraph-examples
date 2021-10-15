import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mxHtmlService } from 'src/app/exercise/test1/htmlService/mx-html-service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {
  @ViewChild('graphContainer', null) graphContainer: ElementRef;

  graph: mxGraph;
  constructor(  private _mxHtmlService : mxHtmlService
    ) { 
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.loadGraph();
  }

  loadGraph():void{
    const graphContainer = this.graphContainer.nativeElement;
    this.graph = new mxGraph(graphContainer);
    
    this.setConfig(this.graph);
    this.setOverrides(this.graph)
    this.setStyles(this.graph);
    
    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();
      let selectedTrigger: AutoCard = {
        title: 'From Steer',
        setup: 'On Ticket Approve'
      };
      let selectedCondition: AutoCard = {
        title: 'If Condition',
        setup: 'conditional statement...'
      };
      // Insert vertices
      var v1 = this.graph.insertVertex(parent, null, selectedTrigger, 25, 25, 244, 80, this.CELL_TRIGGER);
      var v2 = this.graph.insertVertex(parent, null, selectedCondition, 25, 200, 244, 80, this.CELL_CONDITION);
      //var v3 = this.graph.insertVertex(parent, null, this.CELL_ACTION, 150, 165, 100, 50, this.CELL_ACTION);

      // Insert edges
      this.graph.insertEdge(parent, null, '', v1, v2, this.EDGE_STYLE);
      //this.graph.insertEdge(parent, null, '', v2, v3, this.EDGE_STYLE);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }


  setOverrides(graph: mxGraph): void {
    let self = this;
    const oldGetLabel = graph.getLabel;
    graph.getLabel = function (cell) {
      if (this.getModel().isVertex(cell)) {
        switch (cell.style) {
          case self.CELL_TRIGGER:
            // Return an HTML string and it will be rendered as such
            let trigger: AutoCard = cell.value;
            return self._mxHtmlService.getTriggerHtml(trigger.title, trigger.setup);
          case self.CELL_CONDITION:
            let condition: AutoCard = cell.value;
            return self._mxHtmlService.getConditionHtml(condition.title, condition.setup);
          default:
            return oldGetLabel.apply(this, arguments);
        }
      }
    };
  }

  setConfig(graph: mxGraph): void {
    // Enables HTML labels
    graph.setHtmlLabels(true);
  }

  DEFAULT_STYLE = "default-style";
  CELL_STYLE_1 = "style-1";
  CELL_STYLE_2 = "style-2";
  EDGE_STYLE = "edge-style";


  
  CELL_TRIGGER="trigger"
  CELL_CONDITION="condition"
  CELL_ACTION="action"
  CELL_SELECTION="selection"

  setStyles(graph: mxGraph): void {
    let style = graph.getStylesheet().getDefaultVertexStyle();

     style = mxUtils.clone(style);
    // Overflow fill must be applied so the HTML will fill the cell
    style[mxConstants.STYLE_OVERFLOW] = 'visible';
    style[mxConstants.STYLE_STROKECOLOR] = 'none';
    style[mxConstants.STYLE_FILLCOLOR] = 'transparent';
    graph.getStylesheet().putCellStyle(this.CELL_TRIGGER, style);
  
    style = [];
    style[mxConstants.STYLE_OVERFLOW] = 'visible';
    style[mxConstants.STYLE_STROKECOLOR] = 'none';
    style[mxConstants.STYLE_FILLCOLOR] = 'transparent';
    graph.getStylesheet().putCellStyle(this.CELL_CONDITION, style);

    style = [];
    style[mxConstants.STYLE_RESIZABLE] = 0;
    style[mxConstants.STYLE_MOVABLE] = 0;
    style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
    style[mxConstants.STYLE_FONTCOLOR] = 'black';
    graph.getStylesheet().putCellStyle(this.CELL_ACTION, style);

    style = [];
    style[mxConstants.STYLE_EDGE] = mxEdgeStyle.OrthConnector;
    style[mxConstants.STYLE_STROKECOLOR] = '#1F1F1F';
    style[mxConstants.STYLE_ENDARROW]='false';
    //style[mxConstants.STYLE_DASHED] = 'true';
    graph.getStylesheet().putCellStyle(this.EDGE_STYLE, style);
  }
}

interface AutoCard {
  title: string;
  setup:string;
}