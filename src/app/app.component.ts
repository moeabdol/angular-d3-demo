import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('D3 version', d3['version']);
  }

  ngOnInit() {
    const canvas = d3.select('#canvas')
      .append('svg')
      .attr('viewBox', '0 0 100 100');
      // .attr('width', 800)
      // .attr('height', 600);

    const circle = canvas.append('circle')
      .attr('cx', 5)
      .attr('cy', 5)
      .attr('r', 5)
      .attr('fill', '#0000FF');

    const square = canvas.append('rect')
      .attr('x', 10)
      .attr('y', 0)
      .attr('width', 10)
      .attr('height', 10);

    const line = canvas.append('line')
      .attr('x1', 0)
      .attr('y1', 10)
      .attr('x2', 10)
      .attr('y2', 20)
      .attr('stroke', 'grey')
      .attr('stroke-width', 0.3);
  }
}
