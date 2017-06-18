import React, { Component, PropTypes } from 'react'
import '../style/main.css';

export default class ButtonSet extends Component {
  static propTypes = {
    list: PropTypes.object,
    index: PropTypes.number
  }

  render() {
    return (
        <div className="back">
            <p>Your selected restaurant is located at {this.props.list.response.groups[0].items[this.props.index].venue.location.address}. Enjoy your meal!</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
        </div>
    );
  }
}
