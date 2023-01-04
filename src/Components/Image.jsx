import React from 'react';

class Image extends React.Component {
  render() {
    const { src, alt } = this.props;

    return <img src={src} alt={alt} />;
  }
}

export default Image;
