import React from "react"
import img1 from "../projects/img/amee-1.png"
import img2 from "../projects/img/amee-2.png"
import img3 from "../projects/img/amee-3.jpg"
import img4 from "../projects/img/amee-4.jpg"
import img5 from "../projects/img/amee-5.jpg"
import img6 from "../projects/img/amee-6.jpg"
import img7 from "../projects/img/amee-7.jpg"
import img8 from "../projects/img/amee-8.jpg"
import img9 from "../projects/img/amee-9.png"

import casestudy from "../projects/assets/CaseStudy-AMEEHacks.pdf"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO 
      title="AMEE Hacks" 
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
      />
      
      <div className="container">
        <div className="columns">
          <div className="column">
            <h2>Amee Hacks: Medical Education Hackathon</h2>
            <p>
              <small>Lead Organiser | September 2015</small>
            </p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={img1} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h3>The Event</h3>
            <p>
            A two-day medical education hackathon, which 
            took place during the 2015 AMEE conference. 
            </p>
            <p>
            Hand-picked developers, designers, medics and 
            educators from Europe, came together to tackle 
            challenges students and lecturers face in medical 
            education.
            </p>
          </div>
          <div className="column">
            <h3>Judges</h3>
            <p><b>Stephen Downes</b>: Researcher at the NRC's Institute for Information Technology's e-Learning</p>
            <p><b>Alan Ryan</b>: Technology Enhanced Learning Lead for Health Education England</p>
            <p><b>Dr. Michael Ross</b>: Senior Clinical Lecturer at he University of Edinburgh, General Practitioner and Co-Editor-in-Chief of The Clinical Teacher journal</p>
            <p><b>Professor Madalena Patricio</b>: AMEE Past President</p>
          </div>
        </div>

        <div className="columns stats">
            <div className="column">
              <center><b>48</b><br/>Hours</center>
            </div>
            <div className="column">
              <center><b>46</b><br/>Participants</center>
            </div>
            <div className="column">
              <center><b>1,519</b><br/>Tweets</center>
            </div>
            <div className="column">
              <center><b>403,006</b><br/>Audience</center>
            </div>
            <div className="column">
              <center><b>2,365,745</b><br/>Impressions</center>
            </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={img2} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h3>Challenges</h3>
            <ul>
              <li><p>Medical students are expected to learn and retain huge amounts of information. Knowing what to use, when, and how to use these in the most effective way, can be very difficult.</p></li>
              <li>Medical students face continuous assessment, and the materials to help them prepare for these assessments are not always effective or address their individual needs.</li>
              <li>The majority of medical educators are not using technology to its full potential when creating teaching materials for students.</li>
            </ul>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={img3} />
          </div>
          <div className="column">
            <img src={img4} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={img5} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h3>1. Challenge Statements & Pitching ideas</h3>
            <p>Sponsors presented challenges to the participants aimed at improving medical education. Attendees had a chance to share their ideas at the beginning of the event. These were 60-second informal pitches consisting of the challenge they wanted to to solve and the rough solution they had in mind.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h3>2. Team Formation</h3>
            <p>Attendees joined the team of the idea that resonated with them the most - being able to choose their team meant all members believed in the idea, had the passion to build a fantastic prototype and had the skills that were relevant to the respective project. Short team workshops were carried out to facilitate this process
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h3>3. Hacking Medical Education</h3>
            <p>As soon as teams were formed, the organisers and mentors encouraged the teams to introduce themselves to one another before getting to work on their projects. All attendees worked in an immersive environment, where they had the opportunity to engage with experts in the medical education industry.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h3>4. Presentations</h3>
            <p>After the intense 48 hours, AMEE Hackers were given the chance to present what they achieved in front of a panel of industry experts. Presentations consisted of the challenges they were tackling, their solution, a demo of their prototype, and the next steps for them to develop it further.</p>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h3>5. Awards Ceremony</h3>
            <p>The best, most relevant and engaging ideas were selected as the winners of the hackathon. Feedback was given to all teams, prizes were awarded to the top three winners, and the 3-night stay in Amsterdam was awarded to the first place winner of the competition.</p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h3>Winner: Med Junkie</h3>
            <p>Team Med Junkie proved they understood the limited time medical students have to read and revise by building a mobile app that allows them to learn/revise topics/books through speed reading. Based on the time available, students can spend anywhere from 30 seconds to five minutes reviewing specific subjects on the go.</p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={img6} />
          </div>
          <div className="column">
            <img src={img7} />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <img src={img8} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <h3>Exposure & Impact</h3>
            <p>Although the AMEE Hacks hackathon itself was limited to 46 participants, it attracted a much larger audience. Over the two-day event, the AMEE Hackathon managed to reach a massive audience online - with over 2,000,000 impressions, and a reach of over 400,000 different individuals around the world.</p>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <img src={img9} />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <center><br/><br/>
              <a 
                href={casestudy}
                className="download">
                  Download AMEE Hacks Case Study
              </a>
            </center>
          </div>
        </div>

      </div>

  </Layout>
)

export default ProjectPage
