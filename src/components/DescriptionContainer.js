import React, { Component } from 'react'
import '../style/main.css';

export default class DescriptionContainer extends Component {
  render() {
    return (
      <div className="card-desc">
        <div className="description">
          <p>Torchy's</p>
          <div className="misc">
            <div className="location">
              <svg className="icon" viewBox="0 0 24 24">
                <path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
              </svg>
              <p>0.3 <span>miles</span></p>
            </div>
        <div className="star">
          <svg className="icon" viewBox="0 0 24 24">
            <path fill="#FFDF00" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
          <p>4.4</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
