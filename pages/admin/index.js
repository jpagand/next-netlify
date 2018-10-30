import React, { Component } from 'react';
import dynamic from 'next/dynamic'
import ApplicationLayout from '../../components/layout'

const Redirect = dynamic(() => import('./redirect'), {
  ssr: false
})


class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <Redirect/>
      </ApplicationLayout>
    );
  }
}

export default index;