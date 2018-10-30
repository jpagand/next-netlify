import React, { Component } from 'react';
import { Div, Title } from '../Typo';
import Content from '../Content';
import ListItem from './ListItem';

class SectionParticiper extends Component {
  render() {
    const {titre, texte_intro, parties = [], texte_outro, color} = this.props;
    return (
      <Div container id="section_participer" paddingTop={4} paddingBottom={4}>
        <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>
        <Div margin={[3, 0]} centerXs>
         <Content>{texte_intro}</Content>
        </Div>
        <Div row>
          {parties.map((partie) => (
            <ListItem colXs={12}  marginBottomXs={3} {...partie} color={color}/>
          ))}
        </Div>     
        <Div margin={[3, 0]} centerXs>
         <Content>{texte_outro}</Content>
        </Div>
      </Div>
    );
  }
}

export default SectionParticiper;