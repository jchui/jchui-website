import React from "react"
import { FaHeart } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <h1>
              For work inquiries, collaboration, or feedback <br/>
              <a href="mailto:jeremy@jchui.me">jeremy@jchui.me</a>
          </h1>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <span>Current Work</span>
          <p>
              <b>Designer & Developer</b><br/>
              Freelance
          </p>
          <p>
              <b>Emergency Medicine Doctor</b><br/>
              National Health Service
          </p>
        </div>

        <div className="column">
            <span>Find me on</span>
            <ul>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Github</a></li>
                <li><a href="">Instagram</a></li>
            </ul>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <span>Education</span>
          <p>
              <b>Healthcare & Design, MSc</b><br/>
              Imperial College London & Royal College of Art <span>(Est. 2021)</span>
          </p>
          <p>
              <b>Bachelor of Medicine & Bachelor of Surgery, MBChB</b><br/>
              University of Sheffield <span>2017</span>
          </p>
          <p>
              <b>Bachelor of Medical Sciences, BMedSci</b><br/>
              University of Sheffield <span>2014</span>
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>Designing my own career at the intersection of medicine and technology.</p>
          <p>London, United Kingdom <FaHeart/></p>
        </div>
      </div>

    </div>
  </footer>
)

export default Footer
