import React, { Component } from 'react';
import { connect } from 'react-redux';
import './WeightForm.css';
import PropTypes from 'prop-types';

export class WeightForm extends Component {
  constructor() {
    super();
    this.state = {
      number: 0
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.calculateWeight(this.state.number, this.props.multiplier);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ number: 0 })
  }

  render() {
    return (
      <form>
        <p className='calculation-label'>What would your weight on this planet be? Enter your weight in the field below and click 'submit' to find out!</p>
        <input
          type='number'
          placeholder='Enter your weight (lbs)'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button
        onClick={(e) => this.handleSubmit(e)}
        >
          Submit
        </button>
        {this.props.calculation > 0 && <p>Your weight on this planet would be: {this.props.calculation.toFixed(2)} pounds!</p>}
      </form>
    )
  }
}

export const mapStateToProps = state => ({
  calculation: state.calculation
});

export default connect(mapStateToProps)(WeightForm);

WeightForm.propTypes = {
  calculation: PropTypes.number,
  calculateWeight: PropTypes.func,
  multiplier: PropTypes.number
}