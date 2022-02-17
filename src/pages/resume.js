import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import cv from '../assets/Jeremy Chui - CV.pdf';

const CVPage = () => (
  <Layout>
    <SEO
      title="Résumé"
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
    />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h1>Résumé</h1>
        </div>
        <div className="column">
          <a href={cv} className="download float-right">
            Download PDF
          </a>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <div className="cvcard">
            <h3>Skills</h3>
            <ul>
              <li>Healthcare Design</li>
              <li>User Interaction Design</li>
              <li>User Experience Design</li>
              <li>Front-End Engineering</li>
              <li>User Research</li>
              <li>User Testing</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="cvcard">
            <h3>Tools</h3>
            <ul>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Invision</li>
              <li>Visual Studio Code</li>
              <li>DigitalOcean</li>
              <li>Github</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Lightroom</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="cvcard">
            <h3>Technologies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>GatsbyJS</li>
              <li>PHP</li>
              <li>Python</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <small>Current Roles</small>
          <br />
          <br />

          <h3>Emergency Medicine Doctor</h3>
          <h1>North West London NHS Healthcare Trust</h1>
          <br />

          <h3>Honorary Clinical Research Fellow</h3>
          <h1>Imperial College London</h1>
          <br />

          <h3>Clinical Entrepreneur Fellow</h3>
          <h1>NHS England</h1>
        </div>
      </div>
    </div>
  </Layout>
);

export default CVPage;
