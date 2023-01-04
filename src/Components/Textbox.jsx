import React from 'react';


class Textbox extends React.Component {
  render() {
    const { text, className } = this.props;
    return (
      <p className={className}>{text}</p>
    );
  }
}

export default Textbox;