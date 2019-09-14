import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCalculation } from '../../actions/index';
import './App.css';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import PageContainer from '../../components/PageContainer/PageContainer';

export class App extends Component {

  calculateWeight = (weight, multiplier) => {
    let calculation = weight * multiplier;
    this.props.addCalculation(calculation);
  }

  render() {

    return (
      <>
      <Header />
      <Route exact path="/" render={ () => <HomePage /> } />
      <Route exact path="/mercury" render={ () => <PageContainer 
        fact={this.props.planetFacts['Mercury'].fact}
        imgUrl={this.props.planetFacts['Mercury'].imgUrl}
        factUrl={this.props.planetFacts['Mercury'].factUrl}
        factSite={'Universe Today'}
        multiplier={.38}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/venus" render={ () => <PageContainer 
        fact={this.props.planetFacts['Venus'].fact}
        imgUrl={this.props.planetFacts['Venus'].imgUrl}
        factUrl={this.props.planetFacts['Venus'].factUrl}
        factSite={'Universe Today'}
        multiplier={.91}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/earth" render={ () => <PageContainer 
        fact={this.props.planetFacts['Earth'].fact}
        imgUrl={this.props.planetFacts['Earth'].imgUrl}
        factUrl={this.props.planetFacts['Earth'].factUrl}
        factSite={'Universe Today'}
        multiplier={1}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/mars" render={ () => <PageContainer 
        fact={this.props.planetFacts['Mars'].fact}
        imgUrl={this.props.planetFacts['Mars'].imgUrl}
        factUrl={this.props.planetFacts['Mars'].factUrl}
        factSite={'Universe Today'}
        multiplier={.38}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/jupiter" render={ () => <PageContainer 
        fact={this.props.planetFacts['Jupiter'].fact}
        imgUrl={this.props.planetFacts['Jupiter'].imgUrl}
        factUrl={this.props.planetFacts['Jupiter'].factUrl}
        factSite={'Universe Today'}
        multiplier={2.34}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/saturn" render={ () => <PageContainer 
        fact={this.props.planetFacts['Saturn'].fact}
        imgUrl={this.props.planetFacts['Saturn'].imgUrl}
        factUrl={this.props.planetFacts['Saturn'].factUrl}
        factSite={'Universe Today'}
        multiplier={1.06}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/uranus" render={ () => <PageContainer 
        fact={this.props.planetFacts['Uranus'].fact}
        imgUrl={this.props.planetFacts['Uranus'].imgUrl}
        factUrl={this.props.planetFacts['Uranus'].factUrl}
        factSite={'Universe Today'}
        multiplier={.92}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/neptune" render={ () => <PageContainer 
        fact={this.props.planetFacts['Neptune'].fact}
        imgUrl={this.props.planetFacts['Neptune'].imgUrl}
        factUrl={this.props.planetFacts['Neptune'].factUrl}
        factSite={'Universe Today'}
        multiplier={1.19}
        calculateWeight={this.calculateWeight}
      /> } />
      <Route exact path="/pluto" render={ () => <PageContainer 
        fact={this.props.planetFacts['Pluto'].fact}
        imgUrl={this.props.planetFacts['Pluto'].imgUrl}
        factUrl={this.props.planetFacts['Pluto'].factUrl}
        factSite={'Space.com'}
        multiplier={.06}
        calculateWeight={this.calculateWeight}
      /> } />
      </>
    )
  }
}

export const mapStateToProps = state => ({
  planetFacts: state.planetFacts
});

export const mapDispatchToProps = dispatch => ({
  addCalculation: (calculation) => dispatch(addCalculation(calculation))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
