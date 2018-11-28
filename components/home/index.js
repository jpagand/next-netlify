import React, {Fragment} from 'react';
import Header from '../Header';
import Hero from '../Hero';
import SectionQui from './SectionQui';
import SectionQuoi from './SectionQuoi';
import SectionComment from './SectionComment';
import SectionParticiper from './SectionParticiper';
import colors from '../Colors';

const Home = ({ titre = '', image_intro = '', section_qui = {}, section_quoi = {}, section_comment = {}, section_participer = {} }) => {

  const sections = [
    {
      anchor: 'section_qui',
      texte_bouton: section_qui.texte_bouton
    },
    {
      anchor: 'section_quoi',
      texte_bouton: section_quoi.texte_bouton
    },
    {
      anchor: 'section_comment',
      texte_bouton: section_comment.texte_bouton
    },
    {
      anchor: 'section_participer',
      texte_bouton: section_participer.texte_bouton
    },
  ]

  return (
    <Fragment>
      <Header page=""/>
      <Hero image={image_intro} titre={titre} sections={sections}/>
      <SectionQui color={colors.green} {...section_qui} />
      <SectionQuoi color={colors.blue} {...section_quoi} negative />
      <SectionComment color={colors.orange} {...section_comment} />
      <SectionParticiper color={colors.purple} {...section_participer} />
    </Fragment>
 
  )
}

export default Home;