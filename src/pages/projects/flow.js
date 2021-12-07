import React from 'react';
import img1 from '../projects/img/flow-1.png';
import img2 from '../projects/img/flow-2.png';
import img3 from '../projects/img/flow-3.png';
import img4 from '../projects/img/flow-4.png';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ProjectPage = () => (
  <Layout>
    <SEO
      title="Patient Flow Tracker"
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
    />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>Patient Flow Tracker</h2>
          <p>
            <small>Side Project</small>
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <img src={img1} />
          <br />
          <br />
          <img src={img2} />
          <br />
          <br />
          <img src={img3} />
          <br />
          <br />
          <img src={img4} />
          <br />
          <br />
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
