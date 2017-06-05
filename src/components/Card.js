import React, { Component } from 'react'
import '../style/main.css';
import Photo from '../components/Photo'
import DescriptionContainer from '../components/DescriptionContainer'

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <Photo/>
        <DescriptionContainer/>
      </div>
    );
  }
}
