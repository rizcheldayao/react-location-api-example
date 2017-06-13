import React, { Component, PropTypes } from 'react'
import '../style/main.css';

export default class Photo extends Component {
  static propTypes = {
    photoURL: PropTypes.string,
  }

  render() {
    return (
      <div className="card-photo">
        <img className="image" role="presentation" src={this.props.photoURL}/>
      </div>
    );
  }
}
