import React, { Component } from 'react';
import { Div } from '../Grid';
import { Subheadline } from '../Typo';
import Content from '../Content';
import Images from './Images';
import Avatar from './Avatar';

class SectionParrains extends Component {
  render() {
    const {titre, texte_intro, texte_outro, texte_autre_parrains, parrains = [], images, color,...etc} = this.props;
    const enAvant = parrains.filter(p => p.mettre_en_avant)
    return (
      <Div row {...etc}>
        <Div colXs={12} colSm={6}>
          <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
          <Content>{texte_intro}</Content>
          <Div row marginXs={[1,0]} centerXs>
            {enAvant.map(parrain => (
              <Div colXs={12} colMd={6}><Avatar {...parrain} color={color}/></Div>
            ))}
          </Div>
          <Content>{texte_outro}</Content>
        </Div>
        <Div colXs={12} colSm={6}>
        <Div row>
          <Images images={images} color={color} colSm={12}/>
            <Div colXs={12}>
              <Content>{texte_autre_parrains}</Content>
            </Div>
          </Div>      
        </Div>
  
      </Div>
    );
  }
}

export default SectionParrains;