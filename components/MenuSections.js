import React, { Component, Fragment } from 'react';
import styled, {css} from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { withWindowScroll } from 'libreact/lib/WindowScrollSensor';

import { Div } from './Typo';
import colors from './Colors';
import Media from './Media';

const Container = styled(Div)`
  ${props => props.isFixed && css`
    position: fixed;
    top: 58px;
    left: 0;
    right: 0;
    background: #fff;
    padding-top: 6px;
    padding-bottom: 12px;
    z-index: 9;
    ${Media.sm`
      padding-top: 6px;
      padding-bottom: 12px;
      z-index: 8;
    `}
  `}
  > ul {
    display: flex;
    padding: 0;
    margin: 0;
  }
`
const AnchorLinkStyled = styled(AnchorLink)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 1rem;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0 0.25rem;
  ${Media.sm`
    font-size: 1.125rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
  `}
  &:nth-of-type(1) {
    background: ${colors.green};
    border: solid 1px #fff;
  }
  &:nth-of-type(2) {
    background: ${colors.blue};
    border: solid 1px #fff;
  }
  &:nth-of-type(3) {
    background: ${colors.red};
    border: solid 1px #fff;
  }
  &:nth-of-type(4) {
    background: ${colors.purple};
    border: solid 1px #fff;
  }
  &:nth-of-type(even) {
    transform: rotate(3deg)
  }
  &:nth-of-type(odd) {
    transform: rotate(-3deg)
  }

  ${props => props.isFixed && css`
    &:not(.is-active) {
    background: white ! important;
    border: solid 1px #8B8B8B;
    color: #8B8B8B;
    }    
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    ${Media.sm`
      font-size: 1rem;
      padding: 0.25rem 1rem;
    `}
  `};

`
class MenuSections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFixed: false
     };
  }
  isFixed = () => {
    if (this.elem &&  process.browser && window.scrollY > 120) {
      const rect = this.elem.getBoundingClientRect();
      return rect.top < 60;
    }
      return false
  }
  componentDidMount() {
    this.setState({isFixed: this.isFixed()});
  }

  componentWillReceiveProps(props) {
    this.setState({isFixed: this.isFixed()});
  }


  render() {
    const { sections } = this.props;
    return (
      <Container dFlexXs centerXs ref={e => this.elem = e} isFixed={this.state.isFixed}>
        <Scrollspy items={sections.map(s => s.anchor)} currentClassName='is-active' offset={-120}>
          {sections.map(section => (
              <AnchorLinkStyled offset='120' href={`#${section.anchor}`}  isFixed={this.state.isFixed}>{section.texte_bouton}</AnchorLinkStyled>
          ))}
        </Scrollspy>
      </Container>
    );
  }
}


export default withWindowScroll(MenuSections)