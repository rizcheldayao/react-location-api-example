import React, { Component } from 'react'
import '../style/main.css';

export default class Photo extends Component {
  render() {
    return (
      <div className="card-photo">
        <img className="image" src="https://kingwoodonline.com/sites/kingwoodonline.com/files/articles/tavola-torchys.jpg"/>
      </div>
    );
  }
}
