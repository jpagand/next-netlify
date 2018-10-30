import React, { Component } from 'react';
import styled from 'styled-components';
import {Div} from './Typo';

const Container = styled(Div)`
  background: #fff;
  height: 58px;
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  z-index: 9;
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
  isActive = (path) => {
    return window.location.pathname === path + '/'
  }
  render() {
    return (
      <Container endXs middleXs row>    
        <Div>
          <Link href="/" active={this.isActive('')}>L'association</Link>   
        </Div>    
        <Div marginLeft={2}>
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

export default Header;