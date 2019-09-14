import Asteroid from '../../components/Asteroid/Asteroid';
import SpaceStationInfo from '../../components/SpaceStationInfo/SpaceStationInfo';
import React, { Component } from 'react';
import { fetchAPOD, fetchISS, fetchAsteroids } from '../../util/apiCalls';
import { addAPOD, addAPODError, addISS, addISSError, addAsteroids, addAsteroidsError } from '../../actions/index';
import { connect } from 'react-redux';
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

    setInterval( async () => {
      try {
        const ISS = await fetchISS()
        this.props.addISS(ISS)
      } catch (error) {
        this.props.addISSError(error.message)
      }
    }, 2000)

    try {
      let formattedDate = new Date().toISOString().slice(0, 10);
      const asteroids = await fetchAsteroids(formattedDate)
      this.props.addAsteroids(asteroids.near_earth_objects[formattedDate])
    } catch (error) {
      console.log("IN THE ERROR", error)
      this.props.addAsteroidsError(error.message)
    }
  }

  render() {

    let asteroidsList;

    if (this.props.asteroids.length) {
      asteroidsList = this.props.asteroids.map(asteroid => {
        return <Asteroid
          key={asteroid.name}
          name={asteroid.name}
          minDiam={asteroid.estimated_diameter.miles.estimated_diameter_min.toFixed(3)}
          maxDiam={asteroid.estimated_diameter.miles.estimated_diameter_max.toFixed(3)}
          isHazardous={asteroid.is_potentially_hazardous_asteroid}
        />
      })
    } else {
      asteroidsList = <p>Getting asteroid info...</p>
    }

    return (
      <section className='home-container'>
        <div className='img-container'>
          <h2 className='img-header'>Today's astronomy picture of the day:</h2>
          {this.props.apodError && <p>{this.props.apodError}</p>}
          {this.props.APOD && <img src={this.props.APOD.url} className='apod' alt='The astronomy picture of the day'/>}
          {this.props.APOD && <p className='img-caption'>{this.props.APOD.title}.</p>}
          {this.props.APOD && this.props.APOD && <p className='img-copyright'>© {this.props.APOD.copyright} {this.props.APOD.date}</p>}
        </div>
        <section>
          <h2>Asteroids near Earth today:</h2>
          <ul className='asteroids-list'>
            {asteroidsList}
          </ul>
        </section>
        <div className='iss-container'>
          <h2>Where is the International Space Station?</h2>
          {this.props.issError && <p>{this.props.issError}</p>}
          {this.props.iss && 
            <SpaceStationInfo 
              lat={this.props.iss.latitude}
              long={this.props.iss.longitude}
              velo={this.props.iss.velocity.toFixed(2)}
              altitude={this.props.iss.altitude.toFixed(2)}
            />
          }
        </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  APOD: state.apod,
  apodError: state.apodError,
  iss: state.iss,
  issError: state.issError,
  asteroids: state.asteroids,
  asteroidsError: state.asteroidsError
});

export const mapDispatchToProps = dispatch => ({
  addAPOD: APOD => dispatch(addAPOD(APOD)),
  addAPODError: error => dispatch(addAPODError(error)),
  addISS: ISS => dispatch(addISS(ISS)),
  addISSError: error => dispatch(addISSError(error)),
  addAsteroids: asteroids => dispatch(addAsteroids(asteroids)),
  addAsteroidsError: error => dispatch(addAsteroidsError(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);