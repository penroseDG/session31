import React, { Component } from 'react';
interface Props {
  data: any; 
}
class MyComponent extends Component<Props> {
  declare props: any;
  shouldComponentUpdate(nextProps: Props) {
    if (nextProps.data === this.props.data) {
      return false; 
    }
    return true; 
  }
  render() {
    const { data } = this.props;
    return (
      <div>
        <p>Data from prop: {data}</p>
      </div>
    );
  }
}
export default MyComponent;