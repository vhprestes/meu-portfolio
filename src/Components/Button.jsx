import React from 'react';


class Button extends React.Component {
  render() {
    const { text, className } = this.props;
    return (
      <button className={className}>{text}</button>
    );
  }
}

export default Button;