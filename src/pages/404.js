import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>
      I don't know exactly what went wrong, but I know it's always my fault.
    </p>
  </Layout>
);

export default NotFoundPage;
