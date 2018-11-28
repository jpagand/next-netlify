import React, { Component } from 'react';
import styled from 'styled-components';
import { withWindowScroll } from 'libreact/lib/WindowScrollSensor';
import {Div} from './Typo';
import Media from './Media';
import Link from 'next/link'

const Container = styled(Div)`
  background: #fff;
  position: fixed;
  height: 58px;
  margin: 0;
  top: 0;
  left: -100px;
  right: -100px;
  padding-right: 100px;
  padding-left: 100px;
  z-index: 9;
  transform: translateX(${({progress}) => progress >= 1 ? 100 : 0 }px);
  transition: all ease-in 0.1s;  
  font-size: 14px;
  ${Media.sm`  
    padding: 0;
    padding-left: ${({progress}) => progress >= 1 ? 180 : 0 }px;
    transform: none;
    right: 0;
    left: 0;
    font-size: 16px;
  `}
`

const StyledLink = styled('a')`
  color: ${props => props.active ? '#555555' :'#909090'};
  font-weight: ${props => props.active ? 'bold' :'normal'};
  padding: 0 0.5rem;
  &:hover {
    opacity: 0.7;
  }
  ${Media.sm`
    padding 0 1rem;
  `}
`

const Social = styled('a')`
  padding: 0 8px;
  > img {
    height: 16px;
  }
  &:hover {
    opacity: 0.7;
  }
  ${Media.sm`
    height: 20px;
  `}
`

const Logo = styled('div')`  
  position: fixed;
  padding: 8px;
  left: 0;
  width: 100px;
  transform: translateX(0);
  top: 0;
  z-index: 9;
  max-width: 80%;
  &:before {
    content: " ";
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    position: absolute;
    background: white;
    opacity: 1;
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
    width: 180px;
    padding: 16px;
  `}
`
class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: 0
     };
  }
  computeScrollProgress = () => {
    const windowHeight = process.browser ? window.innerHeight / 2 : 100;
    const scrollY = process.browser ? window.scrollY - 100 : 0;
    const progress = process.browser ? Math.min(scrollY/windowHeight, 1) : 0
    return Math.max(progress, 0)
  }
  componentDidMount() {
    this.setState({progress: this.computeScrollProgress()});
  }

  componentWillReceiveProps(props) {
    this.setState({progress: this.computeScrollProgress()});
  }

  isActive = (path) => {
    return this.props.page === path || (process.browser && window.location.pathname === path + '/')
  }
  render() {
    return (
      <Container betweenXs middleXs row progress={this.props.fixedLogo ? 1 : this.state.progress}>    
        <Div>
          <Link href="/">
            <StyledLink href="/" active={this.isActive('')}>L'association</StyledLink> 
          </Link>
          <Link href="/contact">
           <StyledLink href="/contact" active={this.isActive('/contact')}>Contact</StyledLink>   
          </Link>
        </Div>    
        <Div marginLeft={2}>
          <Social href="https://www.facebook.com/lesangesdelarue/" target="_blank" rel="nofollow"><img src="/static/img/facebook.png"/></Social>
          <Social href="https://twitter.com/lesangesdelarue?lang=fr" target="_blank" rel="nofollow"><img src="/static/img/twitter.png"/></Social>
          <Social href="https://www.youtube.com/channel/UCWRuiMc24ZIr0CjQRbQRHDQ" target="_blank" rel="nofollow"><img src="/static/img/youtube.png"/></Social>
        </Div> 
        {this.props.fixedLogo &&  
        <Logo>
          <img src="/static/img/les-anges-de-la-rue-logo.png"  srcSet="/static/img/les-anges-de-la-rue-logo@2x.png 2x, /static/img/les-anges-de-la-rue-logo@4x.png 4x" />
        </Logo> 
        }
      </Container>
    );
  }
}

export default withWindowScroll(Header);