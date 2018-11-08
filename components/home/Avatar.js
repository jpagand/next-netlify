import React from 'react';
import styled from 'styled-components';
import { Div } from '../Grid';
import { Label, Caption } from '../Typo';

const AvatarContainer = styled(Div)`
  text-align: center;
`

const Photo = styled(Div)`
  > img {
    width: 132px;
    border-radius: 50%;
  }
  position: relative;
`
const Metier = styled(Caption)`
  color: #6D6D6D;
`
const Bandeau = styled(Div)`
  transform: rotate(-3deg);
  > span {
    background: ${props => props.color};
    padding: 12px 24px;
    color: white;
    top: -24px;
    position: relative;
  } 
`;

const Avatar = ({nom, type, metier, image, color}) => (
  <AvatarContainer>
    <Photo>
      <img src={image} />
      {type && <Bandeau color={color}><span>{type}</span></Bandeau>}
    </Photo>
    <Label>{nom}</Label>
    <Metier>{metier}</Metier>
  </AvatarContainer>
);

export default Avatar;