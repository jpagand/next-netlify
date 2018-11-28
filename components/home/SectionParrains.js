import React, { Component } from 'react';
import styled from 'styled-components';
import { Div } from '../Grid';
import { Subheadline } from '../Typo';
import Content from '../Content';
import Images from '../Images';
import Avatar from './Avatar';
import ReactPlayer from 'react-player';
import ReactModal from 'react-modal';

const AutreParrain = styled(Div)`
  cursor: pointer;
  color: #5f5f5f;
  text-decoration: underline;
`

class SectionParrains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: null
    };
  }

  onVideoClick = (videoUrl) => {
    this.setState({videoUrl})
  }

  closeModal = () => {
    this.setState({videoUrl: null})
  }

  render() {
    const {titre, texte_intro, texte_outro, texte_autre_parrains, parrains = [], images, color,...etc} = this.props;
    const enAvant = parrains.filter(p => p.mettre_en_avant)
    const autreParrains = parrains.filter(p => !p.mettre_en_avant)
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
            <Div row>
            {autreParrains.map(parrain => (
              <AutreParrain colXs={4} onClick={() => {parrain.lien_youtube && this.setState({videoUrl: parrain.lien_youtube})}}>
                {parrain.nom}
              </AutreParrain>
            ))}
            </Div>
           
             <ReactModal isOpen={!!this.state.videoUrl} onRequestClose={this.closeModal}>
              <ReactPlayer url={this.state.videoUrl} playing style={{margin: '0 auto'}}/>
            </ReactModal>
          </Div>
        </Div>  
      </Div>
      </Div>
    );
  }
}

export default SectionParrains;