import React, { Component } from 'react';
import { Div, Title } from '../Typo';
import Partie from '../Partie';

class SectionConcept extends Component {
  render() {
    const {titre, color, parties = []} = this.props;
    return (
      <Div container id="section_concept" paddingTop={4} paddingBottom={4}>
        {titre && <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>}
        {parties.map((partie, i) => (
          <Partie {...partie} color={color} marginBottom={2} reverse={i%2!==0}/>
        ))}
      </Div>
    );
  }
}

export default SectionConcept;