import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import PageContainer from '../PageContainer/PageContainer';

class App extends Component {
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
      /> } />
      <Route exact path="/venus" render={ () => <PageContainer 
        fact={this.props.planetFacts['Venus'].fact}
        imgUrl={this.props.planetFacts['Venus'].imgUrl}
        factUrl={this.props.planetFacts['Venus'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/earth" render={ () => <PageContainer 
        fact={this.props.planetFacts['Earth'].fact}
        imgUrl={this.props.planetFacts['Earth'].imgUrl}
        factUrl={this.props.planetFacts['Earth'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/mars" render={ () => <PageContainer 
        fact={this.props.planetFacts['Mars'].fact}
        imgUrl={this.props.planetFacts['Mars'].imgUrl}
        factUrl={this.props.planetFacts['Mars'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/jupiter" render={ () => <PageContainer 
        fact={this.props.planetFacts['Jupiter'].fact}
        imgUrl={this.props.planetFacts['Jupiter'].imgUrl}
        factUrl={this.props.planetFacts['Jupiter'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/saturn" render={ () => <PageContainer 
        fact={this.props.planetFacts['Saturn'].fact}
        imgUrl={this.props.planetFacts['Saturn'].imgUrl}
        factUrl={this.props.planetFacts['Saturn'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/uranus" render={ () => <PageContainer 
        fact={this.props.planetFacts['Uranus'].fact}
        imgUrl={this.props.planetFacts['Uranus'].imgUrl}
        factUrl={this.props.planetFacts['Uranus'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/neptune" render={ () => <PageContainer 
        fact={this.props.planetFacts['Neptune'].fact}
        imgUrl={this.props.planetFacts['Neptune'].imgUrl}
        factUrl={this.props.planetFacts['Neptune'].factUrl}
        factSite={'Universe Today'}
      /> } />
      <Route exact path="/pluto" render={ () => <PageContainer 
        fact={this.props.planetFacts['Pluto'].fact}
        imgUrl={this.props.planetFacts['Pluto'].imgUrl}
        factUrl={this.props.planetFacts['Pluto'].factUrl}
        factSite={'Space.com'}
      /> } />
      </>
    )
  }
}

const mapStateToProps = state => ({
  planetFacts: state.planetFacts
});

export default connect(mapStateToProps)(App);
