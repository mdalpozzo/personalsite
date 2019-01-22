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
          <img src="images/hiking1.jpg" />
        </div>
        <div className="namebox">
          <p>Marlin Dalpozzo</p>
          <p>San Francisco, California</p>
          <p>marlin.dalpozzo@gmail.com</p>
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
