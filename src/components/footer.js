import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="columns">
        <div className="column is-6">
          <h1>
            For work inquiries, collaboration, or feedback <br />
            <a href="mailto:jeremy@jchui.me">jeremy@jchui.me</a>
          </h1>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <span>Current Work</span>
          <p>
            <b>Honorary Clinical Research Fellow</b>
            <br />
            Imperial College London
          </p>
          <p>
            <b>Clinical Entrepreneur Fellow</b>
            <br />
            NHS England
          </p>
          <p>
            <b>Doctor</b>
            <br />
            National Health Service
          </p>
        </div>

        <div className="column">
          <span>Find me on</span>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/jtkchui/">LinkedIn</a>
            </li>
            <li>
              <a href="https://twitter.com/jtkchui">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/jchui">Github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/jtkchui/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <span>Education</span>
          <p>
            <b>Healthcare & Design, MSc</b>
            <br />
            Imperial College London & Royal College of Art <span>2021</span>
          </p>
          <p>
            <b>Bachelor of Medicine & Bachelor of Surgery, MBChB</b>
            <br />
            University of Sheffield <span>2017</span>
          </p>
          <p>
            <b>Bachelor of Medical Sciences, BMedSci</b>
            <br />
            University of Sheffield <span>2014</span>
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <p>
            Designing my own career at the intersection of medicine and
            technology.
          </p>
          <p>
            London, United Kingdom <FaHeart />
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
