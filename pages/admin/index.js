import React, { Component } from 'react';
import dynamic from 'next/dynamic'
import ApplicationLayout from '../../components/layout'

const Admin = dynamic(() => import('../../components/admin'), {
  ssr: false
})


class index extends Component {
  render() {
    return (
      <ApplicationLayout>
        <Admin/>
      </ApplicationLayout>
    );
  }
}

export default index;