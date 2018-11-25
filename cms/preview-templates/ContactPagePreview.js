import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'
import Contact from '../../components/contact'

const ContactPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  const iframe = document.getElementsByTagName('iframe')[1]  
  const iframeHeadElem = iframe.contentDocument.head
  return (
    <StyleSheetManager target={iframeHeadElem}>
        <Contact {...data}/>
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
