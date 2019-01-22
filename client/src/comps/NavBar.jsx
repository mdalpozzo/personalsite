import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  onClick = e => {
    if (document.body.className !== 'open') {
      document.body.className = 'open';
    } else {
      document.body.className = '';
    }
  };

  render() {
    return (
      <div className="navbar-container">
        <div>
          <h1>MARLIN DALPOZZO</h1>
        </div>
        <div className="button menu-toggle" onClick={this.onClick}>
          {/* <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div> */}
        </div>
        <nav>
          <a href="#" id="menu-icon" />
          <ul className="menu">
            <li>
              <Link className="navlink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/">
                Work
              </Link>
            </li>
            <li>
              <Link className="navlink" to="/">
                Contact
              </Link>
            </li>
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

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
