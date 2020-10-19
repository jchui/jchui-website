import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { RiArrowDownSLine } from 'react-icons/ri';

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

        <div className="columns">
          <div className="column">
            <Link to="projects/ameehacks">Test Link</Link>
          </div>
        </div>

      </div>

  </Layout>
)

export default IndexPage
