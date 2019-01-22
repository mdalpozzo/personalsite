import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="about-container">
        <div className="banner">
          <img src="images/hiking1.jpg" />
          <div className="leads">
            <h1>Software engineer, songwriter, adventurer</h1>
            <h2> </h2>
          </div>
        </div>
        <p className="aboutblurb">
          I have experience building full-stack applications using Node, JavaScript, React, Redux,
          Express and working with an array of databases from MongoDB to PostgreSQL.
          <br />
          <br />
          I believe in always staying sharp and competitive as an engineer, and a human, by pushing
          the limits of my comfort zone through constantly challenging myself and staying conscious
          of innovation.
          <br />
          <br />I am always interested in delving into new technologies and furthering my knowledge.
        </p>
      </div>
    );
  }
}

// About.propTypes = {
//   getProfileByTool: PropTypes.func.isRequired,
//   getAllLenders: PropTypes.func.isRequired,
//   // errors: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
