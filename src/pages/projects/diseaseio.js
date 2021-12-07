import React from 'react';
import cover from '../projects/img/disease-cover.png';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ProjectPage = () => (
  <Layout>
    <SEO
      title="Disease.io"
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
    />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>Disease.io</h2>
          <p>
            <small>Founder & Technical Lead</small>
          </p>
        </div>
        <div className="column">
          <a href="https://disease.io" className="download float-right">
            Visit Project
          </a>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <img src={cover} />
          <p>
            This page is currently under construction. For more information
            about this project, please check{' '}
            <a href="https://disease.io">disease.io</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
