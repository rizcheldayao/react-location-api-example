import React, { Component, PropTypes } from 'react'
import '../style/main.css';

export default class ButtonSet extends Component {
  static propTypes = {
    list: PropTypes.object,
    index: PropTypes.number
  }


  render() {
    return (
        <div>
        {this.props.list ? (
        <div className="back">
            "hello world"
        </div>) : null}
        </div>
    );
  }
}
