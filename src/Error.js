import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Error;
