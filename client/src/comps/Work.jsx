import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Work extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="work-container">
        <div className="banner">
          <div className="leads">
            <h1>Some of my projects...</h1>
            <h2> </h2>
          </div>
        </div>
        <div className="project-tile">
          <a href="https://tool-share-og.herokuapp.com/" target="_blank">
            Tool Share
          </a>
          <p>A peer-to-peer tool sharing application.</p>
          <div className="specs">
            <p>Front-end: React/Redux</p>
            <p>Back-end: Node, Express, MongoDB</p>
          </div>
          <a href="https://tool-share-og.herokuapp.com/" target="_blank">
            <img src="images/toolshare.png" />
          </a>
        </div>
        <div className="project-tile">
          <a href="https://communitynews88.herokuapp.com/" target="_blank">
            Community News
          </a>
          <p>A socially driven, local news outlet and forum.</p>
          <div className="specs">
            <p>Front-end: React/Redux</p>
            <p>Back-end: Node, Express, MongoDB</p>
          </div>
          <a href="https://communitynews88.herokuapp.com/" target="-blank">
            <img src="images/communitynews.png" />
          </a>
        </div>
      </div>
    );
  }
}

// Work.propTypes = {
//   getProfileByTool: PropTypes.func.isRequired,
//   getAllLenders: PropTypes.func.isRequired,
//   // errors: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Work);
