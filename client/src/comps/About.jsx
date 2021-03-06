import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class About extends Component {
  constructor() {
    super();
    this.state = {
      mainpic: 'images/hiking_lowres.jpg',
      highres: 'images/hiking.jpg',
    };
  }

  componentWillMount() {
    const highresimg = new Image();
    highresimg.onload = () => {
      this.setState({
        mainpic: this.state.highres,
      });
    };
    highresimg.src = this.state.highres;
  }

  render() {
    return (
      <div className="about-container">
        <div className="banner">
          <img className="about-mainpic" src={this.state.mainpic} />
          <div className="leads">
            <h1>Software engineer, songwriter, adventurer</h1>
            <h2> </h2>
          </div>
        </div>
        <div className="tldr-container">
          <img className="tldr" src="images/tldr-light.png" alt="tldr code" />
        </div>
        <div className="aboutblurb">
          <p className="aboutbody">
            I am a Full-Stack Software Engineer experienced in building full-stack web applications.
            I was born and raised in Santa Barbara, California. I moved to San Francisco in 2011
            after receiving a Bachelors in Geology, with a Minor in Paleontology, and Music
            Composition at Sonoma State University. After playing in a rock band and making websites
            on the side I decided to turn full-time towards software engineering. Eventually, in
            2018 I completed the Hack Reactor Full-stack Engineering Immersive bootcamp, sharpening
            my engineering toolset. I spent several months teaching JavaScript fundamentals and
            React before deciding to pursue a more active engineering career.
            <br />
            <br />
            I currently freelance building web sites and web applications.
            <br />
            <br />I believe in always staying sharp and competitive as an engineer, and a human, by
            pushing the limits of my comfort zone through constantly challenging myself and staying
            conscious of innovation.
            <br />
          </p>
        </div>
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
