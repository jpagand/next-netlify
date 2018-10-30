import React, { Component, Fragment } from 'react';
import Image from './Image';

class Images extends Component {
  render() {
    const {images = [], color, ...etc} = this.props;
    const colSize = images.length > 1 ? 6 : 12
    return (
      <Fragment>
        {images.map(image => (
          <Image  colXs={colSize} borderColor={color}  marginBottom={1.5} image={image}/>
        ))}
      </Fragment>
    );
  }
}

export default Images;