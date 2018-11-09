import React, { Component } from 'react';
import styled from 'styled-components';
import { withWindowScroll } from 'libreact/lib/WindowScrollSensor';
import {Div} from './Typo';

const Container = styled(Div)`
  background: #fff;
  height: 58px;
  position: fixed;
  top: 0;
  margin: 0;
  width: 100%;
  z-index: 9;
  padding-left: ${({progress}) => 180 * Math.min(progress, 1) }px;
  transition: all ease-in 0.1s;
`

const Link = styled('a')`
  color: ${props => props.active ? '#555555' :'#909090'};
  font-weight: ${props => props.active ? 'bold' :'normal'};
  padding: 0 1rem;
  &:hover {
    opacity: 0.7;
  }
`

const Social = styled('a')`
  padding: 0 8px;
  > img {
    height: 20px;
  }
  &:hover {
    opacity: 0.7;
  }
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
      <Container betweenXs middleXs row progress={this.state.progress}>    
        <Div>
          <Link href="/" active={this.isActive('')}>L'association</Link> 
          <Link href="/contact" active={this.isActive('/contact')}>Contact</Link>   
        </Div>    
        <Div marginLeft={2}>
          <Social href="https://www.facebook.com/lesangesdelarue/" target="_blank" rel="nofollow"><img src="/static/img/facebook.png"/></Social>
          <Social href="https://twitter.com/lesangesdelarue?lang=fr" target="_blank" rel="nofollow"><img src="/static/img/twitter.png"/></Social>
          <Social href="https://www.youtube.com/channel/UCWRuiMc24ZIr0CjQRbQRHDQ" target="_blank" rel="nofollow"><img src="/static/img/youtube.png"/></Social>
        </Div>    
      </Container>
    );
  }
}

export default withWindowScroll(Header);