import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Div } from '../Typo';
import colors from '../Colors';

const Container = styled(Div)``
const AnchorLinkStyled = styled(AnchorLink)`
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.125rem;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  &:nth-of-type(1) {
    background: ${colors.green}
  }
  &:nth-of-type(2) {
    background: ${colors.blue}
  }
  &:nth-of-type(3) {
    background: ${colors.red}
  }
  &:nth-of-type(4) {
    background: ${colors.purple}
  }
  &:nth-of-type(even) {
    transform: rotate(3deg)
  }
  &:nth-of-type(odd) {
    transform: rotate(-3deg)
  }

`
class MenuSections extends Component {
  render() {
    const { sections } = this.props;
    return (
      <Div dFlexSm centerSm>
        {sections.map(section => (
            <AnchorLinkStyled offset='80' href={`#${section.anchor}`}>{section.texte_bouton}</AnchorLinkStyled>
        ))}
      </Div>
    );
  }
}


export default MenuSections