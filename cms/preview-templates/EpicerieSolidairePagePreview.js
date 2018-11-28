import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'
import EpicerieSolidaire from '../../components/epicerieSolidaire'

const EpicerieSolidairePagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  const iframe = document.getElementsByTagName('iframe')[1]  
  const iframeHeadElem = iframe.contentDocument.head
  return (
    <StyleSheetManager target={iframeHeadElem}>
        <EpicerieSolidaire {...data}/>
    </StyleSheetManager>
  
  )
}

EpicerieSolidairePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
}

export default EpicerieSolidairePagePreview
