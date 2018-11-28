import React, { Component } from 'react';
import { Div, Subheadline } from './Typo';
import Content from './Content';
import Images from './Images';

class Partie extends Component {
  render() {
    const {titre, color, texte, images, reverse, ...etc} = this.props
    const showImages = images && images.length
    return (
      <Div row {...etc}>
        <Div colXs={12} colMd={showImages ? 6 : 12}>
          <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
          <Content>{texte}</Content>
        </Div>
        {showImages && 
        <Div colXs={12} colMd={6} firstMd={reverse}>
          <Div row>
            <Images images={images} color={color}/>
          </Div>
        </Div>
        }
      </Div>
    );
  }
}

export default Partie;