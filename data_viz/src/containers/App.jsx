import { Component } from 'react';
import Routes from './elements/Routes';
import { connect } from 'react-redux';
import { windowResize } from '../actions';

class App extends Component {
  state = {
    name: 'data_viz',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  browser: state.browser
});

export default connect(mapStateToProps, {windowResize})(App);