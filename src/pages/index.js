import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { RiArrowDownSLine } from 'react-icons/ri';

import amee from "../pages/projects/img/amee-cover.png"
import bmedsci from "../pages/projects/img/bmedsci-cover.png"
import rtp from "../pages/projects/img/rtp-cover.png"
import hd from "../pages/projects/img/hd-cover.png"

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Home" 
      description="A designer, developer, and doctor based in 
                  the United Kingdom. Passionate about 
                  innovation in medicine & technology."
      author="@jtkchui"
      />
      
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>
              Hello!<br/>
              I'm a designer, developer, and doctor based in the United Kingdom.<br/>
              Passionate about innovation in <span>medicine</span> & <span>technology</span>.
            </h1>
            <p>
              <small>Discover my work <RiArrowDownSLine/></small>
            </p>
          </div>
        </div>

        <div className="columns projects">
          <div className="column">
          <Link to="projects/hdmsc"  className="gradient-border">
              <img src={hd}/>
            </Link>
            <br/><br/>
            <Link to="projects/ameehacks"  className="gradient-border">
              <img src={amee}/>
            </Link>
            <br/><br/>
            <Link to="projects/bmedsci"  className="gradient-border">
              <img src={bmedsci}/>
            </Link>
            <br/><br/>
            {/* <Link to="projects/rtp"  className="gradient-border">
              <img src={rtp}/>
            </Link>
            <br/><br/> */}
          </div>
        </div>

      </div>

  </Layout>
)

export default IndexPage
