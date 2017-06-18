import React, { Component, PropTypes } from 'react'
import '../style/main.css';

export default class ButtonSet extends Component {
  static propTypes = {
    editIndex: PropTypes.func,
    flip: PropTypes.func, 
    isFlipped: PropTypes.bool
  }

  render() {
    return (
        <div className="button-set">
          <svg className="button" onClick={this.props.editIndex} viewBox="0 0 24 24">
              <path fill="#e50000" d="M2,5.27L3.28,4L21,21.72L19.73,23L17.73,21H15.5L15.21,18.5L12.97,16.24C12.86,16.68 12.47,17 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15H8L9.5,16.5L11,15H11.73L10.73,14H2A3,3 0 0,1 5,11H7.73L2,5.27M14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.74,18.92L14.54,12.72L14,8M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2,18H13Z" />
          </svg>
          <svg className="button" id="flip" onClick={this.props.flip} viewBox="0 0 24 24">
              <path fill="#60a304" d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2,18H13M3,15H8L9.5,16.5L11,15H12A1,1 0 0,1 13,16A1,1 0 0,1 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15Z" />
          </svg>
        </div>
    );
  }
}
