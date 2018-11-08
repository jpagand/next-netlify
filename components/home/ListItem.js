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
  height: 82px;
  width: 82px;
  position: absolute;
  ${Media.sm`
    height: 102px;
    width: 102px;
  `}
  ${Media.md`
    height: 132px;
    width: 132px;
  `}
  ${Media.lg`
    height: 172px;
    width: 172px;
  `}
`

const Button = styled('a')`
  color: #fff;
  background: ${(props) => props.color};
  padding: 8px 12px;
`
const Body = styled(Div)`
  padding-left: 0px;
  min-height: 82px;
  ${Media.sm`
    padding-left: 102px;
    min-height: 102px;
  `}
  ${Media.md`
    padding-left: 132px;
    min-height: 132px;
  `}
  ${Media.lg`
    min-height: 172px;
    padding-left: 172px;
  `}

`


const ListItem = ({ image, titre, texte, texte_lien, url_lien, color, ...etc }) => (
  <Div {...etc}>
    {!!image && <Img dNoneXs dBlockSm src={image}/>}
    <Body marginLeftSm={2}>
      <img dNoneXs dBlockSm  align="left" src={image} width="64" style={{marginRight: 16}}/>
      <Subheadline marginBottom={1} style={{color: color}}>{titre}</Subheadline>
      <Content>{texte}</Content>      
      {url_lien && url_lien.trim().length > 0 && 
        <Div>
          <Button color={color} href={url_lien}>{texte_lien}</Button> 
        </Div>
      }
 
    </Body>
  </Div>
)


export default ListItem
