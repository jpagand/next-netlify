import React, { Component } from 'react';
import CMS from 'netlify-cms';
import HomePagePreview from '../../cms/preview-templates/HomePagePreview'
import ContactPagePreview from '../../cms/preview-templates/ContactPagePreview'
import StyleExamplePagePreview from '../../cms/preview-templates/StyleExamplePagePreview'

class Admin extends Component {
  componentDidMount () {
      CMS.registerPreviewStyle('/static/normalize.css')
      CMS.registerPreviewStyle('/static/helpers.css')
      CMS.registerPreviewTemplate('home', HomePagePreview);   
      CMS.registerPreviewTemplate('contact', ContactPagePreview);   
      CMS.registerPreviewTemplate('style-example', StyleExamplePagePreview);   
  }
  render() {
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default Admin;