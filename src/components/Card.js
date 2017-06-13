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
    query: 'food',
    list: null,
    index: 0,
    componentReady: false,
    prefix: null,
    suffix: null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.latitude !== this.props.latitude && prevProps.longitude !== this.props.longitude) {
      this.fetch();
    }
  }

  editIndex() {
    this.setState({
      index: this.state.index + 1,
      prefix: this.state.list.response.groups[0].items[this.state.index].venue.featuredPhotos.items[0].prefix,
      suffix: this.state.list.response.groups[0].items[this.state.index].venue.featuredPhotos.items[0].suffix
    });
    console.log('updated', this.state.index, this.state.suffix);
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
          componentReady: true,
          prefix: responseJson.response.groups[0].items[0].venue.featuredPhotos.items[0].prefix,
          suffix: responseJson.response.groups[0].items[0].venue.featuredPhotos.items[0].suffix });
        console.log(this.state.index);
        return responseJson;
        })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    return (
      <div>
        {this.state.componentReady ? (
          <div className="container">
          <Photo photoURL={`${this.state.prefix}500x500${this.state.suffix}`}/>
          <DescriptionContainer list={this.state.list}
            index={this.state.index}/>
          <ButtonSet editIndex={this.editIndex.bind(this)}/>
          </div>
        ):(
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
