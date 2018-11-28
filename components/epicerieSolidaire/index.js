import React, {Fragment} from 'react';
import Header from '../Header';
import Hero from '../Hero';
import SectionConcept from './SectionConcept';
import SectionLocalisation from './SectionLocalisation';
import SectionHoraires from './SectionHoraires';
import SectionFaq from './SectionFaq';
import colors from '../Colors';

const Home = ({ titre = '', image_intro = '', section_concept = {}, section_localisation = {}, section_horaires = {}, section_faq = {} }) => {

  const sections = [
    {
      anchor: 'section_concept',
      texte_bouton: section_concept.texte_bouton
    },
    {
      anchor: 'section_localisation',
      texte_bouton: section_localisation.texte_bouton
    },
    {
      anchor: 'section_horaires',
      texte_bouton: section_horaires.texte_bouton
    },
    {
      anchor: 'section_faq',
      texte_bouton: section_faq.texte_bouton
    },
  ]

  return (
    <Fragment>
      <Header page="/epicerie-solidaire" fixedLogo/>
      <Hero image={image_intro} titre={titre} sections={sections} hideLogo smallHeight/>
      <SectionConcept color={colors.green} {...section_concept} />
      <SectionLocalisation color={colors.blue} {...section_localisation} />
      <SectionHoraires color={colors.orange} {...section_horaires} />
      <SectionFaq color={colors.purple} {...section_faq} />
    </Fragment>
 
  )
}

export default Home;