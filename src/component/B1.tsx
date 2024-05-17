import React, { Component } from 'react';
interface Props {
    userName : string; 
}
interface State {
}
class Exercise01 extends Component<State,Props>{
  constructor(props : Props) {
    super(props);
    this.state = {
      userName: ' penroseDG dao duc '  
    };
  }
  render() {
    return (
      <div>
        <p>day la ten that cua someone {this.state.userName}!</p>
      </div>
    );
  }
}
export default Exercise01;