import React, { Component } from 'react'

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state={

    }
  }

  componentDidMount() {
    let {svg, xscale, yscale} = this.createContext();
  }

  createContext() {
    const svg = d3.select(this.refs.linechart)
      .append('svg')
      .attr('width', )
      .attr('height', )
      .data()
      .style('position', 'relative')
      .append('g')
      .attr('transform', "translate(" + margins.left + "," + margins.top + ")")
  }

  createChart() {

  }

  render () {
    return (
      <div ref="LineChart">
      </div>
    )
  }
}

export default LineChart

