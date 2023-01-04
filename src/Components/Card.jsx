import React from 'react';
import Button from './Button';


class Card extends React.Component {
  render() {
    const { img, alt, text, link } = this.props;
    return (
      <div className="card">
        <div className="textAndImage">
      <img src={img} alt={alt} />
      <p>{text}</p>
      </div>
      <a className='link' href={link} target="_blank" rel="noreferrer">
      <Button text="Github" className="BtnAbout btn btn-light btn-outline-red" data-mdb-ripple-color="dark"  />
      </a>
      </div>
    );
  }
}

export default Card;