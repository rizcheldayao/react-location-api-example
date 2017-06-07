import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../style/main.css';
import Card from '../components/Card'

export default class App extends Component {

  //Get latitude & longitude
  componentDidMount() {
    const error = document.getElementsByClassName('error');
    if (!navigator.geolocation){
      error.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log('latitidue ' + latitude + 'longitude ' + longitude);
    }

    const failure = () => {
      error.innerHTML = "<p>Unable to retrieve your location</p>";
    }

    navigator.geolocation.getCurrentPosition(success, failure);
  }


  render() {
    return (
      <div className="app">
        <div className="error"></div>
        <Card/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
