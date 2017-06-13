import React, { Component, PropTypes } from 'react'
import '../style/main.css';
import Photo from '../components/Photo'
import DescriptionContainer from '../components/DescriptionContainer'
import ButtonSet from '../components/ButtonSet'

export default class Card extends Component {
  static propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }

  state = {
    query: 'restaurant',
    list: null,
    radius: 25,
    index: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.latitude !== this.props.latitude && prevProps.longitude !== this.props.longitude) {
      this.fetch();
    }
  }

  fetch() {
    const latitude = this.props.latitude,
          longitude = this.props.longitude;

    let request = new Request(URL, {
      method: 'GET',
    });

    return fetch(request)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ list: responseJson,
            index: 0 });
        return responseJson;
        })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <div className="container">
        <Photo/>
        <DescriptionContainer list={this.state.list}
            index={this.state.index}/>
        <ButtonSet/>
      </div>
    );
  }
}
