import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
  examples = [
    {
      id: 1,
      name: 'Hello, World!',
    },
    {
      id: 2,
      name: 'Basic styling',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
