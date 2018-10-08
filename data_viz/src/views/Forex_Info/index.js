import React, { Component } from 'react'
import { Header, Transition } from 'semantic-ui-react'
import ScatterPlot from '../../components/ScatterPlot'
import Map from './elements/Map';
import {US_map_topo} from './elements/US_map_topo';
import {EU_map_topo} from './elements/EU_map_topo';
import {gdp_data} from './elements/Gdp_state';

/*
 <Map 
          width={950}
          height={600}
          margin={50}
          topodata={EU_map_topo}
        />
*/

class Forex_Info extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log(EU_map_topo)
    console.log(gdp_data);
  }

  render () {
    return (
      <div>
        <Header as='h2'>What is Forex?</Header>
        <p>The foreign exchange market is a place for global currency trading.</p>
        <p>The need to exchange currencies for foreign goods and services is the primary driver in the forex market</p>
        <p>Forex is an electronic market open 24 hours aday, five and a half days a week.</p>
      
        <Header as='h2'>What are the most traded Forex Pairs?</Header>
        <p>EUR/USD (euro/dollar) – "euro"</p>
        <p>USD/JPY (U.S. dollar/Japanese yen) – "gopher"</p>
        <p>GBP/USD (British pound/dollar) - "cable"</p>
        <p>USD/CHF (U.S. dollar/Swiss franc) – "swissie"</p>

        <Header as='h2'>2017 Gross domestic product (GDP) by state (millions)</Header>

        <ScatterPlot 
          width={950}
          height={600}
          margin={60}
          marginHeight={160}
          marginWidth={160}
          data={gdp_data}
          yInput={'2017'}
        />

        <Map 
          width={950}
          height={600}
          margin={50}
          topodata={US_map_topo}
          data={gdp_data}
        />
      </div>
    )
  }
}

export default Forex_Info