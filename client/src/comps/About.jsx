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
        <h1>Software engineer, songwriter, adventurer</h1>
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
