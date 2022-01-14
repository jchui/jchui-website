import React from 'react';
import cover from '../projects/img/hd-cover.png';
import img1 from '../projects/img/hdmsc-1.png';
import img2 from '../projects/img/hdmsc-2.png';
import img3 from '../projects/img/hdmsc-3.png';
import img4 from '../projects/img/hdmsc-4.png';
import img5 from '../projects/img/hdmsc-5.png';
import img6 from '../projects/img/hdmsc-6.png';
import img7 from '../projects/img/hd-1.png';
import img8 from '../projects/img/hd-2.png';
import img9 from '../projects/img/hd-3.png';
import img10 from '../projects/img/hd-4.png';
import img11 from '../projects/img/hd-5.png';

import dissertation from '../projects/assets/MSc Dissertation 2021 (J Chui).pdf';

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
          <h2>MSc Healthcare & Design</h2>
          <p>
            <small>Imperial College London & Royal College of Art</small>
          </p>
          <img src={cover} />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h2>Research Project</h2>

          <p>
            This research was completed for the 2-year MSc Programme in
            Healthcare & Design at Imperial College London and the Royal College
            of Art.
          </p>

          <br />
          <br />

          <center>
            <img src={img2} style={{ maxWidth: '80%' }} />
          </center>

          <br />
          <br />

          <h3>Summary</h3>

          <p>
            Taking medications as prescribed is vital for managing chronic
            conditions, treating temporary illnesses and improving overall
            health outcomes. Unfortunately, a significant proportion of patients
            fail to take their medications according to their prescribed
            regimens.
          </p>

          <br />
          <br />
          <center>
            <img src={img1} style={{ maxWidth: '80%' }} />
          </center>
          <br />
          <br />

          <p>
            This study aims to adopt a design thinking approach to understand
            patients' medication compliance issues and generate actionable
            insights to improve health outcomes.
          </p>

          <p>
            Through a combination of primary and secondary research, we sought
            to understand the shared behaviours and challenges that patients
            with poor medication compliance face. By acknowledging our target
            audience and their needs, we uncovered recurrent themes that had to
            be addressed to develop an effective solution.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <img src={img4} style={{ maxWidth: '95%' }} />
          <br />
          <br />
        </div>
        <div className="column">
          <img src={img3} style={{ maxWidth: '95%' }} />
          <br />
          <br />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            A proposed design concept was selected and developed into a
            functioning prototype following a brainstorming and ideation
            process. The development process was part of an iterative cycle with
            continuous usability and desirability testing alongside end-user
            participation through co-design workshops and interviews.
          </p>

          <p>
            This research provides insight into the behaviours and patterns that
            patients with medication non-compliance exhibit. The application of
            a design thinking approach demonstrates its effectiveness in
            delivering a user-centred product. The author hopes that this
            study's insights and results will prompt future research and
            development in this area and promote the use of design thinking in
            more healthcare challenges in the future.
          </p>

          <br />
          <br />
          <center>
            <img src={img5} style={{ maxWidth: '90%' }} />
          </center>
          <br />
          <br />
          <center>
            <img src={img6} style={{ maxWidth: '90%' }} />
          </center>

          <center>
            <br />
            <br />
            <br />
            <a href={dissertation} className="download">
              View Full MSc Dissertation
            </a>
          </center>
          <br />
          <br />
          <hr />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h2>Additional Projects</h2>

          <br />

          <h3>Design and Innovation</h3>

          <p>
            Utilising a design led approach to tackle improving accessibility
            for patients with macular degeneration.
          </p>

          <center>
            <img src={img7} style={{ maxWidth: '95%' }} />
            <br />
            <br />
            <img src={img8} style={{ maxWidth: '95%' }} />
            <br />
            <br />
          </center>

          <br />

          <h3>Design Led Innovation in Healthcare</h3>

          <p>
            Development and analysis of a wicked problem in the evolution of
            healthcare records.
          </p>

          <center>
            <br />
            <img src={img9} style={{ maxWidth: '95%' }} />
          </center>

          <br />

          <h3>Designing for Behavioural Change</h3>

          <p>
            Application of psychological theory of behaviour change in the
            development and prototyping of a healthcare intervention to improve
            posture during video calls.
          </p>

          <center>
            <br />
            <img src={img10} style={{ maxWidth: '95%' }} />
            <br />
            <br />
            <img src={img11} style={{ maxWidth: '95%' }} />
          </center>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
