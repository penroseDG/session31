import React, { Component } from 'react';
interface Props {
}
interface State {
  text: string;
}

class PreventUpdateComponent extends Component<Props, State> {
  state: any;
    setState: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      text: ' học code để thi lại '
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      text: ' học code để thi lại '
    });
  }

  // Fixed code: Define the types of nextProps and nextState
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <button onClick={this.handleClick}> change state</button>
      </div>
    );
  }
}

export default PreventUpdateComponent;