import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Resume extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="resume-container">
        <div className="banner">
          <div className="leads">
            <h1>Resume</h1>
            <h2> </h2>
          </div>
        </div>
        <div className="resume-section">
          <h4>Technology and Skills</h4>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Frontend:</b> JavaScript, React, Angular, Redux, jQuery, Bootstrap, HTML, CSS.
              </p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Backend:</b> NodeJS, Express, PostgreSQL, MySQL, MongoDB, SQL/NoSQL.
              </p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Other Tools:</b> Jest/Enzyme, Mocha/Chai, Async, AXIOS, AJAX, Docker, Git,
                NPM/Yarn, New Relic, Trello/Jira, JSON Web Tokens, bcrypt.
              </p>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h4>Experience</h4>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>CodeFu,</b> Coding Teacher
              </p>
              <p>
                Design and curate curriculum/lesson plans for building fundamental coding practices.
              </p>
              <p>
                Utilize educational technologies and help troubleshoot projects and assignments.
              </p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Dylan's Tours,</b> Web Developer
              </p>
              <p>
                Maintained/improved website. Added React components and single page routing for
                speed.
              </p>
              <p>Helped develop new products/tours and improve logistics of tour execution.</p>
              <p>Design/distribute print and social media visual design.</p>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h4>Education</h4>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Geology,</b> Sonoma State University
              </p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-desc">
              <p>
                <b>Music Composition,</b> Sonoma State University
              </p>
            </div>
          </div>
        </div>
        <div className="resume-section">
          <h4>Projects</h4>
          <div className="resume-item">
            <div className="resume-desc">
              <a href="https://github.com/shark-byte" target="_blank">
                <p>
                  <b>Eat Good,</b> restaurant reviews and info aggregator (e.g. Yelp, Zagat)
                </p>
              </a>
              <p>
                Implemented multi-process server architecture utilizing Node Clusters which
                increased performance during load-testing by over 100% on multi-core hardware.
              </p>
              <p>Benchmarked and compared read speeds between MongoDB and PostgreSQL.</p>
              <p>
                Restructured server design, utilizing NGINX as a reverse proxy to assemble all
                micro-service’s pre-rendered HTML to achieve faster load times and optimize for SEO.
              </p>
              <p>
                Dockerized application and deployed with AWS and Docker Swarm for efficient
                horizontal scaling.
              </p>
            </div>
          </div>
          <div className="resume-item">
            <div className="resume-desc">
              <a href="https://github.com/hackazonDevs" target="_blank">
                <p>
                  <b>Hackazon.com,</b> e-commerce platform web application
                </p>
              </a>
              <p>
                Developed a review analytics component with ReactJS to allow for clear encapsulation
                of state and render logic.
              </p>
              <p>Formulated bulk insertion logic to improve write query time to MongoDB.</p>
              <p>
                Containerized application using Docker to facilitate horizontal scalability in the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Resume.propTypes = {
//   getProfileByTool: PropTypes.func.isRequired,
//   getAllLenders: PropTypes.func.isRequired,
//   // errors: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resume);
