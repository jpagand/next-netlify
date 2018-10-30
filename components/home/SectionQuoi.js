import React, { Component } from 'react';
import styled from 'styled-components';
import { Div, Title, Subheadline } from '../Typo';
import Content from '../Content';
import Image from './Image';

const Container = styled(Div)`
  background: ${props => props.color};
`
const P = styled(Div)`
  ${props => props.withBackground && `
    background: rgba(0,0,0,0.05);
    padding: 30px 15px;
  `}
`
class SectionQuoi extends Component {
  render() {
    const {titre, color, parties = [], negative} = this.props;
    return (
      <Container color={color} paddingTop={4} paddingBottom={4}>
        <Div container id="section_quoi">
          <Title marginBottom={2.5} centerXs style={{color: !negative && color}} negative={negative}>{titre}</Title>
          <Div row betweenXs>
            {parties.map(partie => (
              <Div colXs={12} colSm={6} colMd={4}>
                <P withBackground={partie.titre && partie.titre.trim().length > 0}>
                  {partie.images && partie.images.length > 0 && <Image image={partie.images[0]}  borderColor="#fff" textColor="#fff"/>}
                  <Subheadline marginBottom={1} negative={negative}>{partie.titre}</Subheadline>
                  <Content  negative={negative}>{partie.texte}</Content>
                </P>
              </Div>
            ))}
          </Div> 
        </Div>
      </Container>
    );
  }
}

export default SectionQuoi;