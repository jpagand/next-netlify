import React, { Component } from 'react';
import styled from 'styled-components';
import { withWindowScroll } from 'libreact/lib/WindowScrollSensor';
import { Div, Title } from '../Typo';
import Content from '../Content';
import MenuSections from './MenuSections';
import colors from '../Colors';
import Media from '../Media';
console.log
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

const Logo = styled('div')`
  z-index: 9;
  position: fixed;
  padding: ${({progress}) => 8 * progress}px;
  left: ${({progress}) => (-50 * progress) + 50}%;
  transform: translateX(${({progress}) => (50 * progress) - 50}%);
  max-width: 80%;
  width: ${({progress}) => ((100-450) * progress) + 450}px;
  top: ${({progress}) => (-20 * progress) + 20}%;
  transition: all ease-in 0.1s;
  &:before {
    content: " ";
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    position: absolute;
    background: white;
    opacity: ${({progress}) => progress};
    transform: rotate(${({progress}) => ( -6 * progress)}deg);
    left: -16px;
    top: -16px;
    transition: all ease-in 0.1s;
  }
  > img {
    width: 100%;
    z-index: 9;
    position: relative;
  }
  ${Media.sm`
    width: ${({progress}) => ((180-450) * progress) + 450}px;
    padding: ${({progress}) => 16 * progress}px;
  `}
`
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0
     };
  }
  computeScrollProgress = () => {
    const windowHeight = process.browser ? window.innerHeight / 2 : 100;
    const scrollY = process.browser ? window.scrollY : 0;
    const progress = process.browser ? Math.min(scrollY/windowHeight, 1) : 0
    return progress
  }
  componentDidMount() {
    this.setState({progress: this.computeScrollProgress()});
  }

  componentWillReceiveProps(props) {
    this.setState({progress: this.computeScrollProgress()});
  }

  render() {
    const {image, titre, sections} = this.props;   
    return (
      <Container image={image}>        
        <Logo progress={this.state.progress}>
          <img src="/static/img/les-anges-de-la-rue-logo.png"  srcSet="/static/img/les-anges-de-la-rue-logo@2x.png 2x, /static/img/les-anges-de-la-rue-logo@4x.png 4x" />
        </Logo>
        <Footer centerSm paddingBottomXs={1} paddingSm={[1.5,0]}>
          <Title paddingXs={[0,2]} paddingSm={0}><Content marginBottomSm={1.5} centerXs>{titre}</Content></Title>   
          <MenuSections sections={sections}/>
        </Footer>
      </Container>
    );
  }
}

export default withWindowScroll(Hero);