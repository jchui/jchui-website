import React from 'react';
import cover from '../projects/img/fpas-cover.png';

import img1 from '../projects/img/fpas-1.png';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ProjectPage = () => (
  <Layout>
    <SEO
      title="FPAS Calculator"
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
    />

    <div className="container">
      <div className="columns">
        <div className="column">
          <h2>FPAS Calculator</h2>
          <p>
            <small>Side Project</small>
          </p>
        </div>
        <div className="column">
          <a
            href="https://jchui.github.io/fpas-calc/"
            className="download float-right"
          >
            Visit project
          </a>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <img src={cover} />
          <br />
          <br />

          <h2>Challenge</h2>
          <p>
            Every year, final year medical students rank up foundation schools
            and deaneries where they want to work in after graduation.
          </p>
          <p>
            It is therefore important to know{' '}
            <b>how well they score in comparison to their peers</b>, in order to
            put themselves in the <b>best possible position</b> when applying
            for their <b>dream jobs and locations</b>.
          </p>

          <br />
          <br />

          <h2>Need</h2>

          <p>I released the first version of this application in 2017.</p>
          <p>
            Built as a quick tool in basic html and javascript, I never
            anticipated how popular this application would become.
          </p>
          <p>
            Within months this tool was used over 40,000 times by prospective
            applicants; shared across multiple social media outlets and forums.
          </p>
          <p>
            The following year, I saw a significant increase of users; with over
            140,000 reports generated throughout the academic year.
          </p>

          <p>
            This prompted me to rebuild and redesign the application to allow
            for new features to be implemented in the future and for better
            events tracking across the application.
          </p>

          <br />
          <br />

          <h2>Solution</h2>

          <p>
            I used this project as an opportunity to <b>familiarise</b> myself
            with commonly used <b>javascript frameworks</b>.
          </p>
          <p>
            I built the entire project in <b>ReactJS</b> with a css framework
            from <b>Semantic UI</b>.
          </p>

          <p>
            You can check out this project at&nbsp;
            <a href="https://jchui.github.io/fpas-calc/">
              jchui.github.io/fpas-calc/
            </a>
            .
          </p>

          <br />
          <br />

          <img src={img1} />

          <br />
          <br />
          <br />
          <br />

          <center>
            <a href="https://jchui.github.io/fpas-calc/" className="download">
              Visit project
            </a>
          </center>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
