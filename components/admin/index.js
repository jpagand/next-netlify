import React, { Component } from 'react';
import CMS from 'netlify-cms';
import HomePagePreview from '../../cms/preview-templates/HomePagePreview'


class Admin extends Component {
  componentDidMount () {
      CMS.registerPreviewTemplate('home', HomePagePreview);   
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