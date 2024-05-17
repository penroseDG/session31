import React, { Component } from 'react';
class Notification extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }
  render() {
    return (
      <div>
        <p> Da lam xong t</p>
      </div>
    );
  }
}
export default Notification;
