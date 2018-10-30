import React, { Component } from 'react';
import { Div, Title } from '../Typo';
import Partie from './Partie';
import SectionParrains from './SectionParrains';
import Content from '../Content';
import Card from './Card';

class SectionComment extends Component {
  render() {
    const {titre, texte_intro, parties = [], texte_outro, color} = this.props;
    return (
      <Div container id="section_comment" paddingTop={4} paddingBottom={4}>
        <Title marginBottom={2.5} centerXs style={{color: color}}>{titre}</Title>
        <Div margin={[3, 0]} centerXs>
         <Content>{texte_intro}</Content>
        </Div>
        <Div row>
          {parties.map((partie) => (
            <Card colXs={12} colMd={4}  marginBottomXs={2} marginBottomMd={0} {...partie} color={color}/>
          ))}
        </Div>     
        <Div margin={[3, 0]} centerXs>
         <Content>{texte_outro}</Content>
        </Div>
      </Div>
    );
  }
}

export default SectionComment;