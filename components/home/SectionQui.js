import React, { Component } from 'react';
import { Div, Title } from '../Typo';
import Partie from './Partie';
import SectionParrains from './SectionParrains';

class SectionQui extends Component {
  render() {
    const {titre, color, parties = [], parrains} = this.props;
    return (
      <Div container id="section_qui" paddingTop={4} paddingBottom={4}>
        <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>
        {parties.map((partie, i) => (
          <Partie {...partie} color={color} marginBottom={2} reverse={i%2!==0}/>
        ))}
        <SectionParrains {...parrains} color={color}/>
      </Div>
    );
  }
}

export default SectionQui;