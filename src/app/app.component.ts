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
    // this.enterExample();
    // this.transitions();
    // this.importDate();
    // this.paths();
    this.donutChart();
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

  transitions() {
    const width = 800;
    const height = 800;

    const canvas = d3.select('#graph-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const rect = canvas.append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('fill', 'red');

    const circle = canvas.append('circle')
      .attr('cx', 50)
      .attr('cy', 200)
      .attr('r', 50)
      .attr('fill', 'blue');

    rect.transition()
      .duration(3000)
      .attr('width', 200)
      .transition()
      .duration(0)
      .attr('fill', 'orange');

    circle.transition()
      .duration(3000)
      .attr('cx', 70)
      .attr('cy', 300)
      .attr('r', 70)
      .transition()
      .duration(1000)
      .attr('fill', 'red')
      .transition()
      .duration(1000)
      .attr('cx', 200);
  }

  importDate() {
    d3.json('assets/suicide-squad.json', (data) => {
      console.log(data);

      const canvas = d3.select('#data-container')
        .append('svg')
        .attr('width', 1000)
        .attr('height', 700);

      canvas.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('width', (d) => {
          return d['rank'] * 6;
        })
        .attr('height', 50)
        .attr('y', (d, i) => {
          return i * 80;
        })
        .attr('fill', 'red');

      canvas.selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .attr('fill', '#FFFFFF')
        .attr('y', (d, i) => {
          return i * 80 + 30;
        })
        .attr('x', 5)
        .text((d) => d['name'] + ' ' + d['rank']);
    });
  }

  paths() {
    const canvas = d3.select('#paths-container')
      .append('svg')
      .attr('width', 500)
      .attr('height', 500);

    const data = [
      { x: 10, y: 20 },
      { x: 100, y: 100 },
      { x: 10, y: 200 }
    ];

    const group = canvas.append('g')
      .attr('transform', 'translate(100, 100)');

    const line = d3.line<any>()
      .x((d) => d['x'])
      .y((d) => d['y']);

    group.selectAll('path')
      .data([data])
      .enter()
      .append('path')
      .attr('d', line)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('fill', 'green')
      .attr('stroke-width', 5);

    const radius = 50;
    const p = Math.PI * 2;

    const arc = d3.arc()
      .innerRadius(radius - 10)
      .outerRadius(radius)
      .startAngle(0)
      .endAngle(p);

    group.append('path')
      .attr('d', arc);
  }

  donutChart() {
    d3.json('assets/suicide-squad.json', (data) => {
      const radius = 100;

      const color = d3.scaleOrdinal()
        .range(['red', 'orange', 'yellow', 'blue', 'indigo', 'violet']);

      const canvas = d3.select('#donut-chart')
        .append('svg')
        .attr('height', 1000)
        .attr('width', 1000);

      const group = canvas.append('g')
        .attr('transform', 'translate(500, 350)');

      const arc = d3.arc<any>()
        // .innerRadius(150)
        .innerRadius(0)
        .outerRadius(radius);

      const pie = d3.pie()
        .value((d) => {
          return d['rank'];
        });

      const theArc = group.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

      theArc.append('path')
        .attr('d', arc)
        .attr('fill', 'red');
        // .attr('fill', (d) => {
        //   console.log(d.data['rank']);
        //   return 'red';
        // });

      theArc.append('text')
        .attr('transform', (d) => {
          return 'translate(' + arc.centroid(d) + ')';
        })
        .attr('dy', '0.15em')
        .text((d) => {
          return d['data']['name'];
        });
    });
  }
}
