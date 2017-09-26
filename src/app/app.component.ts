import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor() {
    console.log('D3 version', d3['version']);
  }

  ngOnInit() {
    // const canvas = d3.select('#canvas')
    //   .append('svg')
    //   .attr('viewBox', '0 0 100 100');
      // .attr('width', 800)
      // .attr('height', 600);

    // const circle = canvas.append('circle')
    //   .attr('cx', 5)
    //   .attr('cy', 5)
    //   .attr('r', 5)
    //   .attr('fill', '#0000FF');
    //
    // const square = canvas.append('rect')
    //   .attr('x', 10)
    //   .attr('y', 0)
    //   .attr('width', 10)
    //   .attr('height', 10);
    //
    // const line = canvas.append('line')
    //   .attr('x1', 0)
    //   .attr('y1', 10)
    //   .attr('x2', 10)
    //   .attr('y2', 20)
    //   .attr('stroke', 'grey')
    //   .attr('stroke-width', 0.3);

    // this.visualizeOranges();
    // this.scaling();
    this.enterExample();
  }

  visualizeOranges() {
    const orangeDate = [10, 30, 50, 100];

    const canvas = d3.select('#orange-container')
      .append('svg')
      .attr('width', 768)
      .attr('height', 1024);

    const oranges = canvas.selectAll('circle')
      .data(orangeDate)
      .enter()
      .append('circle')
      .attr('fill', 'orange')
      .attr('cx', function (d, i) {
        return d + (i * 100);
      })
      .attr('cy', function(d) {
        return d;
      })
      .attr('r', function(d) {
        return d;
      });
  }

  scaling() {
    const graphData = [100, 1200];
    const width = 800;
    const height = 800;

    const scaling = d3.scaleLinear()
      .domain([0, 1200])
      .range([0, width]);

    const axis = d3.axisBottom(scaling).ticks(20);

    const canvas = d3.select('#graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(0, 20)');

    const graphBars = canvas.selectAll('rect')
      .data(graphData)
      .enter()
      .append('rect')
      .attr('fill', 'pink')
      .attr('width', function(d) {
        return scaling(d);
      })
      .attr('height', 20)
      .attr('y', (d, i) => {
        return i * 50;
      });

    canvas
      .append('g')
      .attr('transform', 'translate(0, 100)')
      .call(axis);
  }

  enterExample() {
    const data = [200, 100];
    const width = 800;
    const height = 600;

    const canvas = d3.select('#graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const box = canvas.append('rect')
      .attr('width', 300)
      .attr('height', 300)
      .attr('fill', 'red');

    const boxes = canvas.selectAll('rect')
      .data(data)
      .attr('fill', 'purple')
      .exit();
      // .enter()
      // .append('rect')
      // .attr('width', (d) => d )
      // .attr('height', (d) => d)
      // .attr('fill', 'grey')
      // .attr('stroke', 'black');
  }
}
