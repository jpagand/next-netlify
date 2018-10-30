import React, { Component } from 'react';
import ApplicationLayout from '../components/layout';
import Home from '../components/home';
import data from '../content/home/index.json';
class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <Home {...data}/>
      </ApplicationLayout>
    );
  }
}

export default index;