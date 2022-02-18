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

          <h2>The Problem</h2>

          <p>
            Patients referred to acute specialties (e.g. acute medicine, general
            surgery, orthopaedics) from Accident & Emergency are required to be
            reviewed by a clinician from the lead specialty.
          </p>

          <p>
            Referrals usually come through to a senior clinician (SpR), who
            records the patients' details and assigns a member of their team to
            review these patients.
          </p>

          <p>
            However, these details are often recorded on antiquated systems not
            designed for this purpose. As a result, there is no efficient way to
            keep track of patients or the clinicians reviewing them.
          </p>

          <br />
          <br />

          <img src={img2} />
          <br />
          <br />
          <img src={img3} />
          <br />
          <br />

          <h2>My Solution</h2>

          <p>
            Kanban boards have been used by organisations as an effective
            project management tool to track and manage product workflows and
            roadmaps. Inspired by tools such as{' '}
            <a href="https://trello.com">Trello</a> and{' '}
            <a href="https://blog.google/technology/area-120/tables/">
              Google Tables
            </a>
            , I designed a kanban board for managing patient flow in hospitals.
          </p>

          <p>
            This system would allow users to seamlessly track patients across
            departments and help teams work more efficiently.
          </p>

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
