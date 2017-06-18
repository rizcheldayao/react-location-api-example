import React, { Component, PropTypes } from 'react'
import ReactCardFlip from 'react-card-flip';
import '../style/main.css';
import Photo from '../components/Photo'
import DescriptionContainer from '../components/DescriptionContainer'
import ButtonSet from '../components/ButtonSet'
import BackCard from '../components/BackCard'

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
    suffix: null,
    isFlipped: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.latitude !== this.props.latitude && prevProps.longitude !== this.props.longitude) {
      this.fetch();
    }
  }

  flip() {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  editIndex() {
    if(this.state.index === (this.state.list.response.groups[0].items.length-1)) {
      this.setState({
        index: 0,
        prefix: this.state.list.response.groups[0].items[0].venue.featuredPhotos.items[0].prefix,
        suffix: this.state.list.response.groups[0].items[0].venue.featuredPhotos.items[0].suffix
      });
    } else {
      this.setState({
        index: this.state.index + 1,
        prefix: this.state.list.response.groups[0].items[this.state.index+1].venue.featuredPhotos.items[0].prefix,
        suffix: this.state.list.response.groups[0].items[this.state.index+1].venue.featuredPhotos.items[0].suffix
    });
    }
  }


  fetch() {
    const latitude = this.props.latitude,
          longitude = this.props.longitude;
    const URL = `https://api.foursquare.com/v2/venues/explore?v=20170608&ll=${latitude}%2C%20${longitude}&section=${this.state.query}&venuePhotos=1&client_id=CLIENT_ID&client_secret=CLIENT_SECRET`;
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
            <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div className="front" key="front">
              <Photo photoURL={`${this.state.prefix}500x500${this.state.suffix}`}/>
              <DescriptionContainer list={this.state.list}
                index={this.state.index}/>
              <ButtonSet editIndex={this.editIndex.bind(this)} isFlipped={this.state.isFlipped} flip={this.flip.bind(this)}/>
            </div>
            <BackCard key="back" list={this.state.list}
              index={this.state.index}/>
            </ReactCardFlip>
          </div>
        ):(
        <div className="loading">
           <svg width='120px' height='120px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-default"><rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-1s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(30 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.9166666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(60 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.8333333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.75s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(120 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.6666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(150 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.5833333333333334s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.5s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(210 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.4166666666666667s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(240 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.3333333333333333s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.25s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(300 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.16666666666666666s' repeatCount='indefinite'/></rect><rect  x='46.5' y='40' width='7' height='20' rx='5' ry='5' fill='#00b2ff' transform='rotate(330 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='-0.08333333333333333s' repeatCount='indefinite'/></rect></svg>
        </div>
          )}
      </div>
    );
  }
}
