import React, { Component } from 'react';
import { fetchAPOD } from '../../util/apiCalls';
import { addAPOD } from '../../actions/index';
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
    const APOD = await fetchAPOD()
    if (APOD.error) {
      this.setState({error: APOD.error})
    } else {
      this.props.addAPOD(APOD)
    }
  }


  render() {
    console.log(this.props)
    return (
      <>
      {this.props.APOD && <img src={this.props.APOD.url} />}
      </>
    )
  }
}

export const mapStateToProps = state => ({
  APOD: state.apod,
});

export const mapDispatchToProps = dispatch => ({
  addAPOD: APOD => dispatch(addAPOD(APOD))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);