import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
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

    this.graph.getModel().beginUpdate();
    try {
      const parent = this.graph.getDefaultParent();

      // Insert 
      var v1 = this.graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
      var v2 = this.graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
      var e1 = this.graph.insertEdge(parent, null, '', v1, v2);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }
}
