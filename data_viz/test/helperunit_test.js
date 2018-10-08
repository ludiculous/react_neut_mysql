import {abbrState} from '../src/helpers/strings.js';
//import {gdp_data} from '../src/views/Forex_Info/elements/Gdp_states.js';

testStringHelpers();
function testStringHelpers() {
  test('abbrState returns an abbreviated state', ()=>{
    var ca = abbrState('California','abbr');
    expect(ca).toBe('CA');
  })
}