import React, { Component } from 'react';

interface Props {
  isOpen: boolean;
}
class MyComponent extends Component<Props> {
  declare props: { isOpen: any; };
  render() {
    const { isOpen } = this.props;

    return (
      <div>
        {isOpen? (
          <form>
            <input type="text" placeholder="Enter your name" />
            <button type="submit"> CLick </button>
          </form>
        ) : (
          <p>The form is closed.</p>
        )}
      </div>
    );
  }
}
export default MyComponent;