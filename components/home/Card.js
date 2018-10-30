import React from 'react'
import styled from 'styled-components';
import { Div, ButtonText, Subheadline } from '../Typo';
import Media from '../Media';
import colors from '../Colors';
import Content from '../Content';

const Img = styled(Div)`
  background: no-repeat center center;
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 100%;
  height: 260px;
  ${Media.sm`
    height: 370px;
  `}
  ${Media.md`
    height: 200px;
  `}
  ${Media.lg`
    height: 262px;
  `}
`

const Footer = styled(Div)`
  color: ${colors.grey}
  font-style: italic;

  > a {
    color: ${colors.grey};
    font-style: normal;
  }
`

const Body = styled(Div)`
  background: ${colors.greyLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`


const Card = ({ image, titre, texte, texte_lien, url_lien, color, ...etc }) => (
  <Div {...etc}>
    {!!image && <Img src={image} />}
    <Body padding={[2,1.5]}>
      <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
      <Content>{texte}</Content>
      <Footer endXs marginTop={2}>
        {url_lien && url_lien.trim().length > 0 && <a href={url_lien}><ButtonText>{texte_lien}</ButtonText></a>}
        {texte_lien && texte_lien.trim().length > 0 && (!url_lien || url_lien.trim().length == 0) && <ButtonText>{texte_lien}</ButtonText>}
      </Footer>  
    </Body>
  </Div>
)


export default Card
