import React, { Component } from 'react';
import styled from 'styled-components';
import { Div, Title } from '../Typo';
import Partie from '../Partie';

const Container = styled(Div)`
  background: #eee;
`

class SectionFaq extends Component {
  render() {
    const {titre, color, parties = []} = this.props;
    return (
      <Container paddingTop={4} paddingBottom={4}  id="section_faq">
        <Div container >
          {titre && <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>}
          {parties.map((partie, i) => (
            <Partie {...partie} color={color} marginBottom={2} reverse={i%2!==0}/>
          ))}
        </Div>
      </Container>
    );
  }
}

export default SectionFaq;