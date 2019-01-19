import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      location: '',
      results: '',
      errors: {},
    };
  }


  render() {

    return (
      <div className="landing">
        <div id="banner1-bg">
          <div className="leads">
            <h1>MARLIN DALPOZZO</h1>
            <h2>Software Engineer</h2>
          </div>
          <img src="images/mypictransparent.png" />
        </div>
        <div className="attributes">
          <div className="frontend">
            <h3>Front-End</h3>
            <div className="frontendstuff">
              <div className="javascript">
                <img src="images/javascript.png" />
              </div>
              <p className="skill-info">JavaScript (ES6)</p>
              <div className="react">
                <img src="images/react.png" />
              </div>
              <p className="skill-info">React</p>
              <div className="redux">
                <img src="images/redux.png" />
              </div>
              <p className="skill-info">Redux</p>
              <div className="html">
                <img src="images/html.png" />
              </div>
              <p className="skill-info">HTML5</p>
              <div className="css">
                <img src="images/css.png" />
              </div>
              <p className="skill-info">CSS</p>
            </div>
          </div>
          <div className="backend">
            <h3>Back-End</h3>
            <div className="backendstuff">
              <div className="node">
                <img src="images/node.png" />
              </div>
              <p className="skill-info">Node.js</p>
              <div className="mongo">
                <img src="images/mongo.png" />
              </div>
              <p className="skill-info">NoSQL Databases</p>
              <div className="sql">
                <img src="images/sql.png" />
              </div>
            <p className="skill-info">SQL Databases</p>
            </div>
          </div>
          <div className="three">
            <h3>Tools/Deployment/Testing</h3>
            <div className="otherstuff">
              <div className="git">
                <img src="images/git.png" />
              </div>
              <p className="skill-info">Git</p>
              <div className="github">
                <img src="images/github.png" />
              </div>
              <p className="skill-info">Github</p>
              <div className="docker">
                <img src="images/docker.png" />
              </div>
              <p className="skill-info">Docker</p>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {},
    dispatch
  );

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
