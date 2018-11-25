import React, { Component } from 'react';
import CMS from 'netlify-cms';
import HomePagePreview from '../../cms/preview-templates/HomePagePreview'
import ContactPagePreview from '../../cms/preview-templates/ContactPagePreview'


class Admin extends Component {
  componentDidMount () {
      CMS.registerPreviewTemplate('home', HomePagePreview);   
      CMS.registerPreviewTemplate('contact', ContactPagePreview);   
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