import React, { Component } from 'react'
import '../style/main.css';
import Photo from '../components/Photo'
import DescriptionContainer from '../components/DescriptionContainer'
import ButtonSet from '../components/ButtonSet'

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <Photo/>
        <DescriptionContainer/>
        <ButtonSet/>
      </div>
    );
  }
}
