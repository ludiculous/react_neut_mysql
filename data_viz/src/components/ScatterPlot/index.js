import React, { Component } from 'react';
import * as d3 from 'd3';
import {abbrState} from '../../helpers/strings';

class ScatterPlot extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  componentDidMount() {
    console.log(this.props.data);
    const {svg, x, y, xAxis, yAxis, colorScale} = this.createContext();
    this.createChart(svg, x, y, xAxis, yAxis, colorScale);
  }

  createContext() {
    console.log("creating context")
    const svg = d3.select(this.refs.scatterplot)
      .append('svg')
      .attr('width', this.props.width + this.props.marginWidth)
      .attr('height', this.props.height + this.props.marginHeight);

    const x = d3.scaleBand().rangeRound([0, this.props.width])
    
    x.domain(this.props.data.map(d=>{
      if(d.Area !== 'United States') {
        return d.Area;
      }
    }))

    const y = d3.scaleLinear().range([(this.props.height-this.props.marginHeight), 0])
    y.domain([0, d3.max(this.props.data, (d)=>{
        
        if(d.Area !== 'United States') {
          return d[`${this.props.yInput}`];
        } 
      })
    ])
    
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);
  
    const colorScale = d3.scaleSequential(d3.interpolateRainbow)
          .domain( [d3.min(this.props.data, (d)=>{ return d[`${this.props.yInput}`];}), d3.max(this.props.data, (d)=>{ return d[`${this.props.yInput}`];})] );
   
    return {svg, x, y, xAxis, yAxis, colorScale};
  }

  createChart(svg, x, y, xAxis, yAxis, colorScale) {
    const g =  svg.append('g')
      .attr('transform', `translate(${this.props.margin}, ${this.props.margin})`)
      // .attr("class", "axis axis--x")
      // .attr('transform', `translate(0,${this.props.height})`)
      // .call(xAxis);
    
      g.append("g")
      .attr("class", "axis axis--y")
      .call(yAxis)
      .append("text")
        .attr("y", 0)
        .transition()
        .duration(2000)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("2017 GDP in Millions");
      
      const gdots = g.selectAll(".dot")
        .data(this.props.data)
        .enter()
        .append('g')
        
      
      const dots = gdots.append('circle')
            .attr('class', 'dot')
            .attr('transform', `translate(30, 0)`)
            .transition()
            .duration(2000)
            .attr('r', (d)=>{
              let radius = d[`${this.props.yInput}`] * .00001
              if(radius < 1) {
                return 1
              }
              return radius
            })
            .attr('cx', (d)=>{
              if(d.Area !== 'United States') {
                console.log(d.Area)
                return x(d.Area)
              } 
            })
            .attr('cy', (d)=>{
              if(d.Area !== 'United States') {
                return y(d[`${this.props.yInput}`])
              }
            })
            .attr('opacity', .5)
            .style('fill', (d)=>colorScale(d[`${this.props.yInput}`]))

        
        const labels = gdots.append('text')
            .data(this.props.data)
            .text((d)=>abbrState(d.Area, 'abbr'))
            .attr('transform', `translate(20, 5)`)
            .transition()
            .duration(2000)
            .attr('x', (d)=>x(d.Area))
            .attr('y', (d)=>y(d[`${this.props.yInput}`]))
  }
  
  render () {
    
    return (
      <div ref='scatterplot'>
      </div>
    )
  }
}

export default ScatterPlot