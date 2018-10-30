import React, { Component, Fragment } from 'react';
import Head from 'next/head';

class ApplicationLayout extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <meta content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" key="viewport" />
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" key="netlify-identity"></script>
          <script
            key="netlify-login-redirect"
            dangerouslySetInnerHTML={{
              _html: `
                if (window.netlifyIdentity) {
                  window.netlifyIdentity.on("init", user => {
                    if (!user) {
                      window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                      });
                    }
                  });
                }
              `
            }} />     
        </Head>
        {this.props.children}
      </Fragment>
    );
  }
}


export default ApplicationLayout;
