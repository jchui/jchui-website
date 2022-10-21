import React from 'react';
import cover from '../projects/img/pillbox-cover.png';
import img1 from '../projects/img/msc-1.png';
import img2 from '../projects/img/msc-2.png';
import img3 from '../projects/img/msc-3.png';
import img4 from '../projects/img/msc-4.png';
import img5 from '../projects/img/msc-5.png';
import img6 from '../projects/img/msc-6.png';
import img7 from '../projects/img/msc-7.png';
import img8 from '../projects/img/msc-8.png';
import img9 from '../projects/img/msc-9.png';
import img10 from '../projects/img/msc-10.png';
import img11 from '../projects/img/msc-11.png';
import img12 from '../projects/img/msc-12.png';
import img13 from '../projects/img/msc-13.png';
import img14 from '../projects/img/msc-14.png';
import img15 from '../projects/img/msc-15.png';
import img16 from '../projects/img/msc-16.png';
import img17 from '../projects/img/msc-17.png';
import img18 from '../projects/img/msc-18.png';
import img19 from '../projects/img/msc-19.png';
import img20 from '../projects/img/msc-20.png';
import img21 from '../projects/img/msc-21.png';

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
          <h2>Pillbox Health</h2>
          <p>
            <small>MSc Research Project</small>
          </p>
          <img src={cover} />
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h2>Introduction</h2>

          <p>
            This research was completed as part of a 2-year MSc in Healthcare &
            Design at{' '}
            <a href="https://www.imperial.ac.uk/study/pg/medicine/healthcare-and-design/">
              Imperial College London
            </a>{' '}
            and the{' '}
            <a href="https://www.rca.ac.uk/study/programme-finder/healthcare-design-mres/">
              Royal College of Art
            </a>
            .
          </p>

          <p>
            I worked across the end-to-end design process, facilitating user
            interviews and co-design workshops, utilising design tools to
            conduct design research, as well as designing, developing, and
            testing the final product.
          </p>

          <p>
            <b>Awarded: Best MSc Dissertation Project 2021</b>
          </p>

          <hr />

          <h2>The Challenge</h2>

          <p>
            Taking medications as prescribed is vital for managing chronic
            conditions, treating temporary illnesses and improving overall
            health outcomes. Unfortunately, a significant proportion of patients
            fail to take their medications according to their prescribed
            regimens. These interrupted treatment regimens often lead to higher
            hospitalisation rates and mortality, resulting in further personal,
            health, and social costs.
          </p>

          <p>
            <b>
              Goal: To design a solution for improving medication compliance in
              the community.
            </b>
          </p>

          <br />
          <br />

          <center>
            <img src={img1} alt="challenge" style={{ maxWidth: '80%' }} />
          </center>

          <br />
          <br />

          <hr />

          <h2>Discovery</h2>

          <p>
            Adopting a design thinking approach, I ensured that this project was
            as user-centred as possible. I utilised an adapted Double Diamond
            framework, incorporating mixed research methods to gather
            qualitative & quantitative data.
          </p>

          <br />
          <br />

          <center>
            <img src={img2} alt="double diamond" style={{ maxWidth: '90%' }} />
          </center>

          <br />
          <br />

          <p>
            A review of existing literature consolidated what was already known
            about medication compliance and enabled me to identify knowledge
            gaps that my primary research could complement.
          </p>

          <br />
          <br />

          <center>
            <img src={img3} alt="prisma" style={{ maxHeight: '500px' }} />
          </center>

          <br />
          <br />

          <p>
            To kick things off, I identified the key stakeholders in healthcare
            innovation within the National Health Service and evaluated the
            existing solutions available on the market.
          </p>

          <br />
          <br />

          <center>
            <img src={img4} alt="stakeholders" style={{ maxWidth: '500px' }} />
          </center>

          <br />
          <br />

          <center>
            <img
              src={img5}
              alt="research process"
              style={{ maxWidth: '500px' }}
            />
          </center>

          <br />
          <br />

          <p>
            Finally, I grouped the insights obtained through user interviews and
            surveys regarding medication compliance with common themes found in
            the literature.
          </p>

          <br />
          <br />

          <center>
            <img
              src={img20}
              alt="user interviews"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <hr />

          <h2>Definition</h2>

          <p>
            Based on my initial research, a number of patient personas were
            designed to represent the different user types I may encounter. The
            COM-B model was used to identify the needs of each individual for
            them to perform the behaviour of taking medications regularly.
          </p>

          <br />
          <br />

          <center>
            <img src={img6} alt="com-b" style={{ maxWidth: '500px' }} />
          </center>

          <br />
          <br />

          <p>
            Common themes within the literature were also mapped and categorised
            into themes as shown below:
          </p>

          <br />
          <br />

          <center>
            <img
              src={img7}
              alt="thematic analysis"
              style={{ maxWidth: '550px' }}
            />
          </center>

          <br />
          <br />

          <p>
            Finally, the AACTT framework was used to specify my target audience,
            ensuring that I addressed their key behaviours and particular action
            settings when designing an intervention.
          </p>

          <br />
          <br />

          <center>
            <img src={img8} alt="aactt" style={{ maxWidth: '500px' }} />
          </center>

          <br />
          <br />

          <hr />

          <h2>Development</h2>

          <p>
            The development process began with an ideation session, prompted by
            strategy and workshop cards designed for the course's Healthcare and
            Design. I brainstormed and generated over 30 innovative ideas to
            tackle medication compliance, guided by the previously identified
            common themes.
          </p>

          <br />
          <br />

          <center>
            <img src={img9} alt="workshop cards" style={{ maxWidth: '90%' }} />
          </center>

          <br />
          <br />

          <p>
            These ideas were selected and presented as potential design
            solutions to my healthcare challenge. Initial concepts were then
            developed, including physical prototypes and digital wireframes,
            allowing users to visualise and interact with them more
            meaningfully.
          </p>

          <br />
          <br />

          <center>
            <img src={img11} alt="wireframe" style={{ maxWidth: '90%' }} />
          </center>

          <center>
            <img src={img10} alt="mockup" style={{ maxWidth: '90%' }} />
          </center>

          <center>
            <img src={img12} alt="app mockup" style={{ maxWidth: '90%' }} />
          </center>

          <br />
          <br />

          <p>
            The digital pillbox soltuion was selected based on participant
            feedback during a co-design workshop.
          </p>

          <br />
          <br />

          <center>
            <img
              src={img13}
              alt="codesign workshop"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <p>
            Given the positive response and significant interest in the
            technology behind the digital pillbox, I iterated on this concept
            further to build a working prototype. Following a rapid prototyping
            approach with a number of iterations, I used an Arduino device to
            provide the digital backend technology for this product.
          </p>

          <br />
          <br />

          <center>
            <img src={img14} alt="arduino" style={{ maxWidth: '90%' }} />
          </center>

          <br />
          <br />

          <p>
            A high-fidelity prototype was hosted on Invision to demonstrate an
            interactive prototype for usability and desirability testing.
          </p>

          <br />
          <br />

          <center>
            <img
              src={img15}
              alt="highfid prototype"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <center>
            <img
              src={img21}
              alt="service blueprint"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <hr />

          <h2>Delivery</h2>

          <p>
            Product desirability was assessed by measuring conversions on a
            website encouraging visitors to sign up for early access of this
            product. By presenting my research and prototypes to the public
            early in the development process, I was able to identify my value
            proposition and validate my idea before introducing it to the market
            for public adoption.
          </p>

          <br />
          <br />

          <center>
            <img
              src={img16}
              alt="pillbox website"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <p>
            Lastly, I facilitated a product demo workshop with a small group of
            participants. Participants were offered the prototype as a tool to
            assist them in their actions. The product's usability was then
            recorded and measured across 5 domains as shown below.
          </p>

          <br />
          <br />

          <center>
            <img
              src={img17}
              alt="usability workshop"
              style={{ maxWidth: '90%' }}
            />
          </center>

          <br />
          <br />

          <hr />

          <h2>Conclusion</h2>

          <p>
            This research project addressed the main objectives I set out to
            achieve. Although faced with a few limitations, I adopted a design
            thinking methodology to tackle a healthcare environment challenge.
            This human-centred approach helped build a deep understanding of the
            target audiences' challenges and needs, resulting in the development
            of a user-friendly and effective solution.
          </p>

          <p>
            The digital pillbox solution, Pillbox Health, is by no means a
            finished product. Although preliminary usability and desirability
            tests yielded favourable feedback, there remains scope for further
            testing and refinement of this technology.
          </p>

          <p>
            I hope that this study's insights and results will prompt future
            research and development in this area and promote the use of design
            thinking in more healthcare challenges in the future.
          </p>

          <br />
          <br />

          <center>
            <img src={img18} alt="pillbox design" style={{ maxWidth: '90%' }} />
            <img
              src={img19}
              alt="pillbox app design"
              style={{ maxWidth: '90%' }}
            />
          </center>
        </div>
      </div>
    </div>
  </Layout>
);

export default ProjectPage;
