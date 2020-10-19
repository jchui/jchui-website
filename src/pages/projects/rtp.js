import React from "react"
import img1 from "../projects/img/rtp-1.png"
import img2 from "../projects/img/rtp-2.png"
import img3 from "../projects/img/rtp-3.png"
import img4 from "../projects/img/rtp-4.png"
import img5 from "../projects/img/rtp-5.png"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO 
      title="RailTech Platform" 
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
      />
      
      <div className="container">
          <div className="columns">
            <div className="column">
                <h2>
                Railtech Platform:
                A Collaboration with Hack Partners</h2>
                <p>
                    <small>Lead Designer</small>
                </p>
            </div>
          </div>
          <div className="columns">
              <div className="column">
                <img src={img3} />  
              </div>
          </div>
          <div className="columns">
              <div className="column">
                <h3>Background</h3>
                <p>
                    I worked with Hack Partners to design and deliver a Proof-Of-Concept implementation of their RailTech platform, a solution designed to replace current methods of ticketing and on-board train mobile experiences.
                </p>
                <p>
                In addition, as the in-house UX designer during their accelerator programme, I worked with a number of startups to help visualise their ideas and design user interfaces for various other applications in the rail industry.
                </p>
                <br/>
                <img src={img1} />
                <br/><br/>
                <img src={img4} />
                <br/><br/>
                <img src={img5} />
              </div>
          </div>
      </div>

  </Layout>
)

export default ProjectPage
