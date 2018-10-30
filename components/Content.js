import React from 'react'
import PropTypes from 'prop-types'
import showdown from 'showdown';
import { Div } from './Typo';
const  converter = new showdown.Converter();

const Content = ({ content, children,...etc }) => {
  const html = converter.makeHtml(children);
  return (
    <Div {...etc} dangerouslySetInnerHTML={{ __html: html }} />
  )
};

Content.propTypes = {
  content: PropTypes.string,
}


export default Content
