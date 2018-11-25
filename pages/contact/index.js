import React, { Component } from 'react';
import ApplicationLayout from '../../components/layout';
import Contact from '../../components/contact';
import data from '../../content/contact/index.json';
class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <Contact {...data}/>
      </ApplicationLayout>
    );
  }
}

export default index;