import React, { Component } from 'react'
import '../style/main.css';

export default class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <img className="img" src="../img/Autumn.jpg"/>
      </div>
    );
  }
}
