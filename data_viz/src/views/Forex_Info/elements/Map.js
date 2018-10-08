import React, { Component } from 'react'
import * as d3 from 'd3';
import * as topojson from 'topojson';

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {data:''};
  }

  componentDidMount() {
    console.log(this.props.topodata)
    const {svg} = this.createContext();

    this.createMap(svg);
  }

  createContext() {
    const svg = d3.select(this.refs.topomap)
    .append('svg')
    .attr('width', this.props.width + this.props.margin)
    .attr('height', this.props.height + this.props.margin);
    console.log(topojson);
    console.log(svg);

    return {svg}
  }

  createMap(svg) {
    const topo = this.props.topodata;
    const path = d3.geoPath();
    // reads lat/lon coordinates from GeoJson feature, and turns them into screen coordinates
    console.log(svg);

    const g = svg.append("g")
      
      g.selectAll("path")
        .attr("class", "states")
        .data(topojson.feature(topo, topo.objects.states).features)
        .enter()
        .append("path")
        .attr( "fill", "#ccc" )
        .attr("d", path)
        .append("div")
        
      g.selectAll('.states')
        .append("div")
        .attr("class", "statelabel")
        .text("test")
        
    const map = g.append("path")
      .attr("class", "state-borders")
      .attr("d", path(topojson.mesh(topo, topo.objects.states, function(a, b) { return a !== b; })));
  }

  render () {
   
    return (
      <div ref="topomap">
      </div>
    )
  }
}

export default Map