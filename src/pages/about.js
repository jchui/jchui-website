import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import profileImg from "../images/profile-min.png"
import photo1 from "../images/photography/1.jpg"
import photo2 from "../images/photography/2.jpg"
import photo5 from "../images/photography/5.jpg"
import photo4 from "../images/photography/4.jpg"

const AboutPage = () => (
  <Layout>
    <SEO 
      title="About Me" 
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
      />
      
      <div className="container">
        <div className="columns">
          <div className="column">
            <center>
              <img src={profileImg} alt="Profile Image" className="profile"/>
              <h1>
                Hello! I'm Jeremy.
              </h1>
              <h5>
                <font color="#62A6F1">while </font> 
                <font color="#D1D1D1">( </font>
                <font color="#095885">procrastinating </font> 
                <font> == </font> 
                <font color="#129d45">true</font>
                <font color="#D1D1D1">) </font>
                <font color="#B3B3B3">{" { "}</font>
                <font color="#62A6F1">new </font>
                <font color="#e43ea7">sideProject</font>()<font color="#095885">;</font>  
                <font color="#B3B3B3">{" } "}</font>
              </h5>
            </center>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <p>
              Currently working in London as a doctor; 
              designing and building products in my spare time.
            </p>
            <p>
              I personally enjoying working on projects that require 
              both strategy as well as visual design. I love working on 
              problems within the health-tech space; from the ideation 
              stage through to the development of pixel-perfect designs, 
              eventually scaling them into production-ready builds.
            </p>
            <p>
              Also love travelling, photography, and roadtrips. But who doesn't?
            </p>
          </div>
        </div>

        <div className="columns photo">
          <div className="column">
            <div>
              <img src={photo1} />
              <p className="description">
                <span>F/2.8</span>
                <span>1/19</span>
                <span>ISO 100</span>
              </p>
            </div>

            {/* <div>
              <img src={photo5} />
              <p className="description">
                <span>F/1.8</span>
                <span>1/120</span>
                <span>ISO 32</span>
              </p>
            </div> */}
            
          </div>
          <div className="column">
            <div>
              <img src={photo2} />
              <p className="description">
                <span>F/5.6</span>
                <span>1/500</span>
                <span>ISO 100</span>
              </p>
            </div>

            {/* <div>
              <img src={photo4} />
              <p className="description">
                <span>F/2.8</span>
                <span>1/75</span>
                <span>ISO 139</span>
              </p>
            </div> */}

          </div>
        </div>          

      </div>

  </Layout>
)

export default AboutPage
