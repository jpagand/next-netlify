import React, { Component } from 'react';
import ApplicationLayout from '../../components/layout';
import PaniersSolidaires from '../../components/paniersSolidaires';
import data from '../../content/paniers-solidaires/index.json';

class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <PaniersSolidaires {...data}/>
      </ApplicationLayout>
    );
  }
}

export default index;