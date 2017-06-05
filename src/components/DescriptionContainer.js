import React, { Component } from 'react'
import '../style/main.css';

export default class DescriptionContainer extends Component {
  render() {
    return (
      <div className="description">
        <h3>Torchy's</h3>
        <div className="descSet">
          <p>4.4 Stars</p>
          <p>0.3 Miles</p>
        </div>
      </div>
    );
  }
}
