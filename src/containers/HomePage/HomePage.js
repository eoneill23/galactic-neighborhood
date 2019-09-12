import React, { Component } from 'react';
import { fetchAPOD } from '../../util/apiCalls';
import './HomePage.css'

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      APOD: null,
      error: ''
    }
  }

  async componentDidMount() {
    const APOD = await fetchAPOD()
    if (APOD.error) {
      this.setState({error: APOD.error})
    } else {
      this.setState({APOD: APOD})
    }
  }


  render() {
    return (
      <>
      {this.state.APOD && <img src={this.state.APOD.url} />}
      </>
    )
  }
}

export default HomePage;