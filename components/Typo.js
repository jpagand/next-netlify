import React from 'react';
import styled, { css } from 'styled-components';
import colors from './Colors';
import Media from './Media';
import Grid from './Grid';

const noMargin = `
  margin: 0px;
`;

const noPadding = `
  padding: 0px;
`;

const spacing = (type, size) => {
  let sizes = size;
  if (!Array.isArray(size)) {
    sizes = [size];
  }
  if (sizes.length && (sizes[0] || sizes[0] === 0)) {
    return `
      ${type}: ${sizes.join('rem ')}rem;
    `;
  }
  return '';
};

const primary = `
  opacity: 0.9;
  color: ${colors.black};
`;

const secondary = `
  opacity: 0.5;
  color: ${colors.black}
`;

const disabled = `
  opacity: 0.2;
  color: ${colors.black}
`;

const negative = `
  opacity: 1;
  color: ${colors.white}
`;

const negativeSecondary = `
  opacity: 0.7;
  color: ${colors.white}
`;


const success = `
  opacity: 1;
  color: ${colors.success}
`;

const warning = `
  opacity: 1;
  color: ${colors.warning}
`;

const error = `
  opacity: 1;
  color: ${colors.error}
`;

const typo = (props) => css`
  ${props.noMargin && noMargin}
  ${props.noPadding && noPadding}

  ${props.noMarginXs && noMargin}
  ${props.noPaddingXs && noPadding}

  ${props.hasHeader && 'padding-top: 3.5rem'}
  
  ${spacing('margin', props.margin)}
  ${spacing('margin-bottom', props.marginBottom)}
  ${spacing('margin-top', props.marginTop)}
  ${spacing('margin-right', props.marginRight)}
  ${spacing('margin-left', props.marginLeft)}

  ${spacing('margin', props.marginXs)}
  ${spacing('margin-bottom', props.marginBottomXs)}
  ${spacing('margin-top', props.marginTopXs)}
  ${spacing('margin-right', props.marginRightXs)}
  ${spacing('margin-left', props.marginLeftXs)}


  ${spacing('padding', props.padding)}
  ${spacing('padding-bottom', props.paddingBottom)}
  ${spacing('padding-top', props.paddingTop)}
  ${spacing('padding-right', props.paddingRight)}
  ${spacing('padding-left', props.paddingLeft)}

  ${spacing('padding', props.paddingXs)}
  ${spacing('padding-bottom', props.paddingBottomXs)}
  ${spacing('padding-top', props.paddingTopXs)}
  ${spacing('padding-right', props.paddingRightXs)}
  ${spacing('padding-left', props.paddingLeftXs)}
  
  ${props.primary && primary}
  ${props.secondary && secondary}
  ${props.disabled && disabled}
  ${props.negative && negative}
  ${props.negativeSecondary && negativeSecondary}
  ${props.accent && accent}
  ${props.success && success}
  ${props.warning && warning}
  ${props.error && error}

  ${Media.sm`
    ${props.hasHeader && 'padding-top: 6.5rem'}
    ${props.noMarginSm && noMargin}
    ${props.noPaddingSm && noPadding}

    ${spacing('margin', props.marginSm)}
    ${spacing('margin-bottom', props.marginBottomSm)}
    ${spacing('margin-top', props.marginTopSm)}
    ${spacing('margin-right', props.marginRightSm)}
    ${spacing('margin-left', props.marginLeftSm)}
    
    ${spacing('padding', props.paddingSm)}
    ${spacing('padding-bottom', props.paddingBottomSm)}
    ${spacing('padding-top', props.paddingTopSm)}
    ${spacing('padding-right', props.paddingRightSm)}
    ${spacing('padding-left', props.paddingLeftSm)}
  `}

  ${Media.md`
    ${props.noMarginMd && noMargin}
    ${props.noPaddingMd && noPadding}

    ${spacing('margin', props.marginMd)}
    ${spacing('margin-bottom', props.marginBottomMd)}
    ${spacing('margin-top', props.marginTopMd)}
    ${spacing('margin-right', props.marginRightMd)}
    ${spacing('margin-left', props.marginLeftMd)}
    
    ${spacing('padding', props.paddingMd)}
    ${spacing('padding-bottom', props.paddingBottomMd)}
    ${spacing('padding-top', props.paddingTopMd)}
    ${spacing('padding-right', props.paddingRightMd)}
    ${spacing('padding-left', props.paddingLeftMd)}
  `}
  
  ${Media.lg`
    ${props.noMarginLg && noMargin}
    ${props.noPaddingLg && noPadding}

    ${spacing('margin', props.marginLg)}
    ${spacing('margin-bottom', props.marginBottomLg)}
    ${spacing('margin-top', props.marginTopLg)}
    ${spacing('margin-right', props.marginRightLg)}
    ${spacing('margin-left', props.marginLeftLg)}
    
    ${spacing('padding', props.paddingLg)}
    ${spacing('padding-bottom', props.paddingBottomLg)}
    ${spacing('padding-top', props.paddingTopLg)}
    ${spacing('padding-right', props.paddingRightLg)}
    ${spacing('padding-left', props.paddingLeftLg)}
  `}
`;


const Div = styled(Grid)`
  ${typo}  
`;
const Display = styled(Div)`
  font-size: 2rem;
  font-family: 'Vollkorn';
  line-height: 1;
  font-weight: 600;

  ${Media.sm`
    font-size: 3.5rem;
    line-height: 1.12;
  `}

`;

const Headline = styled(Div)`
  font-size: 2rem;
  font-family: 'Vollkorn';
  font-weight: 600;

  ${Media.sm`
    font-size: 2.5rem;
    line-height: 1.12;
  `}
`;

const Title = styled(Div)`
  font-size: 2rem;
  font-family: 'Vollkorn';
  line-height: 1;
  font-weight: 600;  
  ${Media.sm`
    font-size: 2.5rem;
    line-height: 1.12;
  `}

`;

const Subheadline = styled(Div)`
  font-size: 1.5rem;
  font-family: 'Vollkorn';
  line-height: 1.33;
  font-weight: 600;

`;

const Label = styled(Div)`
  font-size: 1rem;
  line-height: 1.14;
  font-weight: 600;
`;

const Body = styled(Div)`
  font-size: 0.875rem;
  line-height: 1.71;
  ${Media.sm`
    font-size: 1.125rem;
    line-height: 1.78;
  `}
`;

const ButtonText = styled(Div)`
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.14;
`;

const Caption = styled(Div)`
  font-size: 0.875rem;
  line-height: 1.71; 
`;
const Small = styled(Div)`
  font-size: 0.625rem;
  line-height: 2.4;
`;

export {
  Div,
  Display,
  Headline,
  Title,
  Subheadline,
  Label,
  Body,
  ButtonText,
  Caption,
  Small,
};

