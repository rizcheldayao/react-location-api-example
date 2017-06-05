import React, { Component } from 'react'
import '../style/main.css';
import Img from '../components/Img'

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <p>This is in the card</p>
        <Img/>
      </div>
    );
  }
}
