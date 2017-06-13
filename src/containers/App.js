import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../style/main.css';
import Card from '../components/Card'

export default class App extends Component {
  state = {
    coords: {
      latitude: null,
      longitude: null
    },
    error: null
  }

  //Get latitude & longitude
  componentDidMount() {
    if (!navigator.geolocation){
      this.setState({ error: 'Geolocation is not supported by your browser' });
      return;
    }

    const success = (position) => {

      this.setState({
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      });
    }

    const failure = () => {
      this.setState({ error: 'Unable to retrieve your location' });
    }

    navigator.geolocation.getCurrentPosition(success, failure);
  }

  render() {
    return (
      <div className="app">
        <Card latitude={this.state.coords.latitude}
              longitude={this.state.coords.longitude}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
