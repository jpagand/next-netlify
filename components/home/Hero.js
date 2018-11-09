import React, { Component } from 'react';
import styled from 'styled-components';
import {Div, Title} from '../Typo';
import Content from '../Content';
import MenuSections from './MenuSections';
import colors from '../Colors';
import Media from '../Media';

const Container = styled(Div)`
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  position: relative;
  height: 100vh;
`
const Footer = styled(Div)`
  background: url('/static/img/background-ellipse-white.png')  no-repeat center center;
  background-size: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

const Logo = styled('img')`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  max-width: 80%;
  width: 450px;
  ${Media.sm`
    top: 150px;
  `}
`
class Hero extends Component {
  render() {
    const {image, titre, sections} = this.props;
    return (
      <Container image={image}>
        <Logo src="/static/img/les-anges-de-la-rue-logo.png"  srcSet="/static/img/les-anges-de-la-rue-logo@2x.png 2x, /static/img/les-anges-de-la-rue-logo@4x.png 4x" />
        <Footer centerSm paddingBottomXs={1} paddingSm={[1.5,0]}>
          <Title paddingXs={[0,2]} paddingSm={0}><Content marginBottomSm={1.5} centerXs>{titre}</Content></Title>   
          <MenuSections sections={sections}/>
        </Footer>
      </Container>
    );
  }
}

export default Hero;