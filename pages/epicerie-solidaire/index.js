import React, { Component } from 'react';
import ApplicationLayout from '../../components/layout';
import EpicerieSolidaire from '../../components/epicerieSolidaire';
import data from '../../content/epicerie-solidaire/index.json';

class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <EpicerieSolidaire {...data}/>
      </ApplicationLayout>
    );
  }
}

export default index;