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
              <li>Front-End Web Development</li>
              <li>User Interaction Design</li>
              <li>User Experience Design</li>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Wicked Mapping</li>
              <li>Systems Design</li>
              <li>Customer Journey Mapping</li>
              <li>Interactive Prototyping</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="cvcard">
            <h3>Tools</h3>
            <ul>
              <li>Sketch</li>
              <li>Figma</li>
              <li>InvisionApp</li>
              <li>Microsoft Visual Studio</li>
              <li>Atom</li>
              <li>GitKraken</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Lightroom</li>
            </ul>
          </div>
        </div>

        <div className="column">
          <div className="cvcard">
            <h3>Technologies</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>jQuery</li>
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
          <small>Currently</small>
          <br />
          <br />

          <h3>ACCS Emergency Medicine Trainee</h3>
          <h1>North West London NHS Healthcare Trust</h1>
          <br />

          <h3>NHS Clinical Entrepreneur Fellow</h3>
          <h1>National Health Service</h1>
          <br />

          <h3>Founder & Technical Lead</h3>
          <h1>The Disease.io Project</h1>
        </div>
      </div>
    </div>
  </Layout>
);

export default CVPage;
