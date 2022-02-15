import React from 'react';
import cover from '../projects/img/hd-cover.png';
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
          <h2>The Course</h2>

          <p>
            The MSc/MRes course in Healthcare & Design is a unique
            interdisciplinary programme that draws on the complementary
            expertise from the{' '}
            <a href="https://www.rca.ac.uk/study/programme-finder/healthcare-design-mres/">
              RCA's School of Design and Helen Hamlyn Design Centre
            </a>{' '}
            and the healthcare expertise from{' '}
            <a href="https://www.imperial.ac.uk/study/pg/medicine/healthcare-and-design/">
              Imperial College London's medical faculty
            </a>{' '}
            and the <a href="https://helixcentre.com">Helix Centre</a> based at
            St Mary's Hospital in Paddington London.
          </p>

          <p>
            I developed an awareness of the role and value of design in solving
            healthcare challenges, as well as a multi-professional perspective
            on problem-solving and the importance of clinical/design
            collaboration.
          </p>

          <p>
            The programme introduced me to a range of research techniques,
            tools, and frameworks in the fields of design and innovation, and
            offered an environment in which to develop design-led skills to
            rapidly research, synthesise, and prototype a solution to a{' '}
            <a href="./pillbox">healthcare challenge</a>.
          </p>

          <hr />

          <h2>Design and Innovation Project</h2>

          <p>
            My team and I utilised a design-led approach to tackle improving
            accessibility for patients with macular degeneration.
          </p>

          <p>
            Macular degeneration damages the central part of our vision, leaving
            our peripheral vision unaffected. Therefore, we designed an
            attachment for glasses to project important information to a user's
            peripheries.
          </p>

          <p>
            My key role in this project was researching and designing the
            internal circuitry of this device, working within the size
            constraints and device requirements.
          </p>

          <center>
            <img src={img7} style={{ maxWidth: '95%' }} />
            <br />
            <br />
            <img src={img8} style={{ maxWidth: '95%' }} />
            <br />
            <br />
          </center>

          <hr />

          <h2>Design Led Innovation in Healthcare Project</h2>

          <p>
            We were introduced to wicked problems and tasked with mapping the
            complex and interconnected nature of healthcare records.
          </p>

          <p>
            Healthcare records have evolved significantly over time, with each
            evolution bringing its own challenges and complexities. We therefore
            decided to map this wicked problem in a three-dimensional space,
            demonstrating how the stakeholders, sources, mediums, and security
            evolve over time.
          </p>

          <p>
            My role in this project included the initial research of the
            different aspects of healthcare records, and the design and
            presentation of the wicked problem.
          </p>

          <center>
            <br />
            <img src={img9} style={{ maxWidth: '95%' }} />
          </center>

          <hr />

          <h2>Designing for Behavioural Change Project</h2>

          <p>
            During this module, we focused on the psychological theory of
            behaviour change and the COM-B model. We consequently developed and
            prototyped a tool to improve posture during video calling.
          </p>

          <p>
            I was primarily working on the development of this prototype,
            utilising open-source tools and libraries such as the ResNet model
            in TensorFlow.js. A live demo of this project can be found{' '}
            <a href="https://jchui.github.io/posture-tracker/">here</a> (not
            maintained).
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
