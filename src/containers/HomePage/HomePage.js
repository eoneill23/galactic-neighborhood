import React, { Component } from 'react';
import { fetchAPOD, fetchISS, fetchAsteroids } from '../../util/apiCalls';
import { addAPOD, addAPODError, addISS, addISSError } from '../../actions/index';
import { connect } from "react-redux";
import './HomePage.css';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      error: ''
    }
  }

  async componentDidMount() {
    try {
      const APOD = await fetchAPOD()
      this.props.addAPOD(APOD)
    } catch (error) {
      this.props.addAPODError(error.message)
    }

    try {
      const ISS = await fetchISS()
      this.props.addISS(ISS)
    } catch (error) {
      this.props.addISSError(error.message)
    }

    try {
      let formattedDate = new Date().toISOString().slice(0, 10);
      const asteroids = await fetchAsteroids(formattedDate)
      this.props.addAsteroids(asteroids)
    } catch (error) {
      this.props.addAsteroidsError(error.message)
    }
  }


  render() {
    return (
      <section>
        <h2>Today's astronomy picture of the day:</h2>
        {this.props.apodError && <p>{this.props.apodError}</p>}
        {this.props.APOD && <img src={this.props.APOD.url} alt='The astronomy picture of the day'/>}
        <h2>Where is the International Space Station?</h2>
        {this.props.issError && <p>{this.props.issError}</p>}
        <section>
          {this.props.iss &&
          <>
            <h3>The ISS's current latitude is {this.props.iss.latitude}</h3>
            <h3>The ISS's current longitude is {this.props.iss.longitude}</h3>
            <h3>The ISS's current speed is {this.props.iss.velocity.toFixed(2)} miles per hour.</h3>
            <h3>The ISS's current altitude is {this.props.iss.altitude.toFixed(2)} miles above Earth.</h3>
          </>
          }
        </section>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  APOD: state.apod,
  apodError: state.apodError,
  iss: state.iss,
  issError: state.issError
});

export const mapDispatchToProps = dispatch => ({
  addAPOD: APOD => dispatch(addAPOD(APOD)),
  addAPODError: error => dispatch(addAPODError(error)),
  addISS: ISS => dispatch(addISS(ISS)),
  addISSError: error => dispatch(addISSError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);