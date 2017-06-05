import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {

  render() {
    return (
      <div/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
