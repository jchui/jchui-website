import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      Whoops, nothing to see here.
      <br />
      <br />
      Sorry, we couldn't find what you were looking for or the page no longer
      exists.
    </h1>
  </Layout>
);

export default NotFoundPage;
