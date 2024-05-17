import React, { Component } from 'react';

class TitleChangeComponent extends Component {
  componentDidMount() {
    document.title = " PenroseDG"; 
  }
  render() {
    return (
      <div>
        <p> hello </p>
      </div>
    );
  }
}
export default TitleChangeComponent;
