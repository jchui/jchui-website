import React from "react"
import img1 from "../projects/img/bmedsci-1.png"
import img2 from "../projects/img/bmedsci-2.png"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO 
      title="BMedSci Research" 
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
      />
      
      <div className="container">
          <div className="columns">
            <div className="column">
                <h2>BMedSci Research: Use of Mobile Technology in Medical Education</h2>
                <p>
                    <small>BMedSci Research Student | 2014</small>
                </p>
            </div>
          </div>
          <div className="columns">
              <div className="column">
                <img src={img2} />  
              </div>
          </div>
          <div className="columns">
              <div className="column">
                <h2>Award</h2>
                  <p>
                    <b>Winner: Best Overall Poster Presentation</b><br/>
                    ASME Annual Scientific Meeting 2014, Brighton
                  </p>
              </div>
              <div className="column">
                    <h2>Presentions</h2>
                    <p>ASME Annual Scientific Meeting 2014, Brighton
                    <br/>AMEE 2014 Conference, Milan</p>
              </div>
          </div>
          <div className="columns">
              <div className="column">
                <h2>Abstract</h2><br/>
                <h3>Background</h3>
                <p>Student feedback to their teachers is an important part of student-centred teaching methods. Course evaluation feedback from students is often late, and not specific to a single tutorial session. We considered that mobile application-based feedback from students might be more timely and relevant.</p>
                
                <br/>
                <h3>Method</h3>
                <p>The setting was problem-based learning tutorials for first year students at a single medical school. Tutors were interviewed individually and collectively, at the start of the academic year, and based on their input, a standard feedback questionnaire was designed, and distributed to students by two methods.</p>
                <p>Over the period of ten consecutive PBL tutorials, paper-based feedback was sought in the first five, and mobile application-based feedback was introduced for the last five. Both schemes were announced at a lecture, and students encouraged periodically to give feedback. All responses were anonymised, summarized and sent on to individual tutors</p>

                <br/>
                <h3>Results</h3>
                <p>We compared response rates and quality of feedback using the two systems. The introduction of the mobile application led to a 330% increase in student to tutor feedback. A total of 141/240 students registered on the website and 108 students downloaded an iPhone specific mobile application.</p>
              
                <br/>
                <h3>Conclusion</h3>
                <p>Student to tutor feedback is important, as most tutors wish to learn and improve their skills. An effective system is beneficial if tutors have to undergo appraisal and revalidation in their teaching role, and can facilitate tutor recruitment. A mobile application method of seeking feedback shows promise in improving rates and quality of feedback.</p>
              
              </div>
          </div>
          <div className="columns">
              <div className="column">
                <img src={img1} />  
              </div>
          </div>
      </div>

  </Layout>
)

export default ProjectPage
