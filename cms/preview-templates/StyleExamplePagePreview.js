import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'
import Content from '../../components/Content'
import { Div } from '../../components/Typo';

const ContactPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  const iframe = document.getElementsByTagName('iframe')[1]  
  const iframeHeadElem = iframe.contentDocument.head
  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Div container>
      <Content>{data.contenu}</Content>
      </Div>
    </StyleSheetManager>
  
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default ContactPagePreview
