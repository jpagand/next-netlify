import React, {Fragment} from 'react';
import Header from '../Header';
import { Div } from '../Typo';
import Content from '../Content';

const Contact = ({ contenu }) => {

  return (
    <Fragment>
      <Header page="/contact" fixedLogo/>
      <Div container paddingTop={4} paddingBottom={4}>
        <Content>{contenu}</Content>      
      </Div>
    </Fragment>
 
  )
}

export default Contact;