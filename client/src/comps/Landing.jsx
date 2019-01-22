import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="landing">
        <div id="banner1-bg">
          <div className="leads">
            <h1>MARLIN DALPOZZO</h1>
            <h2>Full-Stack Software Engineer</h2>
          </div>
          <img src="images/mar1trans.png" />
        </div>
        <div className="attributes">
          <div className="frontend skill-section">
            <h3>Front-End</h3>
            <div className="frontendstuff">
              <div className="javascript skill-button">
                <img className="skill-img" src="images/javascript.png" />
                <p className="skill-info">JavaScript (ES6)</p>
              </div>
              <div className="react skill-button">
                <img className="skill-img" src="images/react.png" />
                <p className="skill-info">React</p>
              </div>
              <div className="redux skill-button">
                <img className="skill-img" src="images/redux.png" />
                <p className="skill-info">Redux</p>
              </div>
              <div className="html skill-button">
                <img className="skill-img" src="images/html.png" />
                <p className="skill-info">HTML5</p>
              </div>
              <div className="css skill-button">
                <img className="skill-img" src="images/css.png" />
                <p className="skill-info">CSS</p>
              </div>
            </div>
          </div>
          <div className="backend skill-section">
            <h3>Back-End</h3>
            <div className="backendstuff">
              <div className="node skill-button">
                <img className="skill-img" src="images/node.png" />
                <p className="skill-info">Node.js</p>
              </div>
              <div className="mongo skill-button">
                <img className="skill-img" src="images/mongo.png" />
                <p className="skill-info">NoSQL Databases</p>
              </div>
              <div className="sql skill-button">
                <img className="skill-img" src="images/sql.png" />
                <p className="skill-info">SQL Databases</p>
              </div>
            </div>
          </div>
          <div className="tools skill-section">
            <h3>Other Tools</h3>
            <div className="otherstuff">
              <div className="git skill-button">
                <img className="skill-img" src="images/git.png" />
                <p className="skill-info">Git</p>
              </div>
              <div className="github skill-button">
                <img className="skill-img" src="images/github.png" />
                <p className="skill-info">Github</p>
              </div>
              <div className="docker skill-button">
                <img className="skill-img" src="images/docker.png" />
                <p className="skill-info">Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Landing.propTypes = {
//   getProfileByTool: PropTypes.func.isRequired,
//   getAllLenders: PropTypes.func.isRequired,
//   // errors: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
