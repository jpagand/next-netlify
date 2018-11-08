import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Div, Caption } from '../Typo';

const Container = styled(Div)`
`
const PictureContainer = styled(Div)`
  position: relative;
  ${props => props.withVideo && `
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  `}
  
`
const Picture = styled(Div)`
  max-width: 100%;
`
const Legende = styled(Caption)`
  padding: 8px 0 8px 18px;
  border-left: solid 2px;
  border-color: ${props => props.borderColor};
  color: ${props => props.textColor};
  font-style: italic;
  text-decoration: underline;
  
`

const PlayIcon = styled(Div)`
  width: 42px;
  position: absolute;
  right: 16px;
  bottom: 16px;
`

class Image extends Component {
  render() {
    const {image, onVideoClick, borderColor = '#979797', textColor = '#979797', ...etc} = this.props;
    return (   
          <Container {...etc}>
          <PictureContainer withVideo={!!image.lien_youtube} onClick={() => image.lien_youtube && onVideoClick(image.lien_youtube)}>
            <Picture src={image.image} as="img"/>
            {image.lien_youtube && <PlayIcon as="img" src="/static/img/play.png"/>}
          </PictureContainer>
            {image.legende && image.legende.trim().length > 0 && <Legende borderColor={borderColor} textColor={textColor} marginTop={0.5}>{image.legende}</Legende>}
          </Container>
    );
  }
}

export default Image;