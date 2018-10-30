import React, { Component } from 'react';
import Router from 'next/router';
import CMS from 'netlify-cms';
import HomePagePreview from '../../cms/preview-templates/HomePagePreview'


class Redirect extends Component {
  componentDidMount () {
      CMS.registerPreviewTemplate('home', HomePagePreview);
      //Router.replace('/static/admin/index.html');    
   
  }
  render() {
    return (
      <div>
        Loading
      </div>
    );
  }
}

export default Redirect;