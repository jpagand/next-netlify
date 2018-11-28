import React, { Component, Fragment } from 'react';
import Image from './Image';
import ReactPlayer from 'react-player';
import ReactModal from 'react-modal';

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: null
    };
  }

  onVideoClick = (videoUrl) => {
    this.setState({videoUrl})
  }

  closeModal = () => {
    this.setState({videoUrl: null})
  }

  render() {
    const {images = [], color, ...etc} = this.props;
    const {videoUrl} = this.state;
    const colSize = images.length > 1 ? 6 : 12
    return (
      <Fragment>
        {images.map(image => (
          <Image colXs={12} colSm colMd={images.length > 1 ? 6 : 12} borderColor={color}  marginBottom={1.5} image={image} onVideoClick={this.onVideoClick} {...etc}/>
        ))}
        <ReactModal isOpen={!!videoUrl} onRequestClose={this.closeModal}>
          <ReactPlayer url={videoUrl} playing style={{margin: '0 auto'}}/>
        </ReactModal>
      </Fragment>
    );
  }
}

export default Images;