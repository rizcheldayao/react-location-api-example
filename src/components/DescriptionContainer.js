import React, { Component, PropTypes } from 'react'
import '../style/main.css';

export default class DescriptionContainer extends Component {
  static propTypes = {
    list: PropTypes.object,
    index: PropTypes.number
  }

  state = {
    distanceMiles: null
  }

  componentDidMount() {
    const distance = this.props.list.response.groups[0].items[this.props.index].venue.location.distance;
    const distanceFormula = distance/(1609.344);
    this.setState({ distanceMiles: distanceFormula.toFixed(2)});
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.index !== this.props.index) {
      const distance = this.props.list.response.groups[0].items[this.props.index].venue.location.distance;
      const distanceFormula = distance/(1609.344);
      this.setState({ distanceMiles: distanceFormula.toFixed(2)});
    }
  }

  render() {
    return (
      <div className="card-desc">
        <div className="description">
          <p>{this.props.list.response.groups[0].items[this.props.index].venue.name}</p>
          <div className="misc">
            <div className="location">
              <svg className="icon" viewBox="0 0 24 24">
                <path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <p>{this.state.distanceMiles}<span> miles</span></p>
            </div>
        <div className="star">
          <svg className="icon" viewBox="0 0 24 24">
            <path fill="#fda817" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <p>{this.props.list.response.groups[0].items[this.props.index].venue.rating}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
