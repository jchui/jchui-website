import React from 'react';
import cover from '../projects/img/hd-cover.png';
import img1 from '../projects/img/hd-1.png';
import img2 from '../projects/img/hd-2.png';
import img3 from '../projects/img/hd-3.png';
import img4 from '../projects/img/hd-4.png';
import img5 from '../projects/img/hd-5.png';
import img6 from '../projects/img/hd-6.png';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ProjectPage = () => (
  <Layout>
    <SEO
      title="MSc Healthcare & Design"
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
    />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>MSc Healthcare & Design (Work-In-Progress)</h2>
          <p>
            <small>Imperial College London & Royal College of Art</small>
          </p>
          <img src={cover} />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            This page is currently under construction. Please check back again
            later!
          </p>
          {/* <img src={img1} />
                <br/><br/>
                <img src={img2} />
                <br/><br/>
                <img src={img3} />
                <br/><br/>
                <img src={img4} />
                <br/><br/>
                <img src={img5} />
                <br/><br/>
                <img src={img6} />
                <br/><br/> */}
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
