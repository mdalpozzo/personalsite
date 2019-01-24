import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contact-container">
        <div className="banner">
          <div className="leads">
            <h1>Contact Me</h1>
            <h2> </h2>
          </div>
        </div>
        <div className="namebox">
          <p>Marlin Dalpozzo</p>
          <p>San Francisco, California</p>
          <p>marlin.dalpozzo@gmail.com</p>
        </div>
        <div className="namebox social">
          <h6>Other Pages and Media</h6>
          <div className="socialmediabox">
            <a href="https://www.linkedin.com/in/marlin-dalpozzo/" target="_blank">
              <i class="fab fa-linkedin-in fa-2x" />
              <p>LinkedIn</p>
            </a>
          </div>
          <div className="socialmediabox">
            <a href="https://github.com/mdalpozzo" target="_blank">
              <i class="fab fa-github fa-2x" />
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

// Contact.propTypes = {
//   getProfileByTool: PropTypes.func.isRequired,
//   getAllLenders: PropTypes.func.isRequired,
//   // errors: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
