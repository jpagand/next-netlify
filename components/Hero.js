import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { withWindowScroll } from 'libreact/lib/WindowScrollSensor';
import { Div, Title } from './Typo';
import Content from './Content';
import MenuSections from './MenuSections';
import colors from './Colors';
import Media from './Media';
console.log
const Container = styled(Div)`
  background: url(${props => props.image}) no-repeat center center;
  background-size: cover;
  position: relative;
  height: ${props => props.height};
`
const Footer = styled(Div)`
  background: url('/static/img/background-ellipse-white.png')  no-repeat center center;
  background-size: cover;
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
`

const Logo = styled('div')`
  position: relative;
  /*
  padding: ${({progress}) => 8 * progress}px;
  left: ${({progress}) => (-50 * progress) + 50}%;
  transform: translateX(${({progress}) => (50 * progress) - 50}%);
  width: ${({progress}) => ((100-450) * progress) + 450}px;
  top: ${({progress}) => (-20 * progress) + 20}%;
  */
  padding: 0px;
  left: 50%;
  top: 20%;
  width: 450px;
  transform: translateX(-50%);
  ${props => props.progress >=1 && css`
    position: fixed;
    padding: 8px;
    left: 0;
    width: 100px;
    transform: translateX(0);
    top: 0;
    z-index: 9;
  `}
  max-width: 80%;
  &:before {
    content: " ";
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    position: absolute;
    background: white;
    opacity: ${({progress}) => progress >= 1 ? 1 : 0};
    transform:  rotate(-6deg);
    left: -16px;
    top: -16px;
  }
  > img {
    width: 100%;
    z-index: 9;
    position: relative;
  }
  ${Media.sm`
    /*width: ${({progress}) => ((180-450) * progress) + 450}px;
    padding: ${({progress}) => 16 * progress}px;
    */
    width: 450px;
    padding: 0px;
    ${props => props.progress >= 1 && css`
      width: 180px;
      padding: 16px;
    `}
  `}
`
const INITIAL_HEIGHT = '100vh';
const SMALL_HEIGHT = '75vh';
class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      height: props.smallHeight ? SMALL_HEIGHT : INITIAL_HEIGHT
     };
  }
  computeScrollProgress = () => {
    let windowHeight = process.browser ? window.innerHeight / 2 : 100;
    if (this.props.smallHeight) {
      windowHeight = windowHeight * 0.75;
    }
    const scrollY = process.browser ? window.scrollY - 100: 0;
    const progress = process.browser ? Math.min(scrollY/windowHeight, 1) : 0
    return Math.max(progress, 0)
  }
  componentDidMount() {
    let pixelHeight;
    let windowHeight;
    if (this.props.smallHeight) {
      pixelHeight = window.innerHeight * 0.75;
      windowHeight = SMALL_HEIGHT;
    } else {
      pixelHeight = window.innerHeight;
      windowHeight = INITIAL_HEIGHT;
    }
    let height = process.browser ? pixelHeight + 'px' : windowHeight
    this.setState({progress: this.computeScrollProgress(), height});
  }

  componentWillReceiveProps(props) {
    this.setState({progress: this.computeScrollProgress()});
  }

  render() {
    const {image, titre, sections, hideLogo} = this.props;   
    return (
      <Container image={image} height={this.state.height}>      
        {!hideLogo && <Logo progress={this.state.progress}>
          <img src="/static/img/les-anges-de-la-rue-logo.png"  srcSet="/static/img/les-anges-de-la-rue-logo@2x.png 2x, /static/img/les-anges-de-la-rue-logo@4x.png 4x" />
        </Logo>
        }
        <Footer centerSm paddingBottomXs={1} paddingSm={[1.5,0]}>
          <Title paddingXs={[0,2]} paddingSm={0}><Content marginBottomSm={1.5} centerXs>{titre}</Content></Title>   
          <MenuSections sections={sections}/>
        </Footer>
      </Container>
    );
  }
}

export default withWindowScroll(Hero);