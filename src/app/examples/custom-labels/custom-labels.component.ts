import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/Person';

@Component({
  selector: 'app-custom-labels',
  templateUrl: './custom-labels.component.html',
  styleUrls: ['./custom-labels.component.scss']
})
export class CustomLabelsComponent implements OnInit {
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

      let value1 = 'lower_case_string';
      let value2 = 8;
      let value3: Person = {
        firstName: 'Michael',
        lastName: 'Stevens',
        age: 32
      };

      this.graph.insertVertex(parent, null, value1, 10, 10, 150, 30, this.UPPERCASE_STYLE);
      this.graph.insertVertex(parent, null, value2, 250, 10, 100, 40, this.MULTIPLY_STYLE);
      this.graph.insertVertex(parent, null, value3, 200, 150, 150, 50, this.PERSON_STYLE);
    }
    finally {
      this.graph.getModel().endUpdate();
    }
  }

  setConfig(graph: mxGraph): void {

  }

  setOverrides(graph: mxGraph): void {
    let self = this;
  
    const oldGetLabel = graph.getLabel;
    graph.getLabel = function (cell) {
      if (this.getModel().isVertex(cell)) {
        switch(cell.style) {
          case self.UPPERCASE_STYLE:
            let stringValue: string = cell.value;
            return stringValue.toUpperCase();
          case self.MULTIPLY_STYLE:
            let numberValue: number = cell.value;
            return `${numberValue} times 8 is ${numberValue*8}`;
          case self.PERSON_STYLE:
            let personValue: Person = cell.value;
            return `${personValue.firstName} ${personValue.lastName}, ${personValue.age}`;
          default:
            return oldGetLabel.apply(this, arguments);
        }
      }
    };
  }

  UPPERCASE_STYLE = "uppercase-style";
  MULTIPLY_STYLE = "multiply-style";
  PERSON_STYLE = "person-style";
  setStyles(graph: mxGraph): void {
    
  }
}
