import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  render() {

    return (
      <div className="navbar-container">
        <nav>
          <a href="#" id="logo"></a>
          <a href="#" id="menu-icon"></a>
          <ul>
            <li><a href="#" class="current">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          </nav>
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
