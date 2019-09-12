import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
      <Route exact path="/mercury" render={ () => <PageContainer /> } />
      <Route exact path="/venus" render={ () => <PageContainer /> } />
      <Route exact path="/earth" render={ () => <PageContainer /> } />
      <Route exact path="/mars" render={ () => <PageContainer /> } />
      <Route exact path="/jupiter" render={ () => <PageContainer /> } />
      <Route exact path="/saturn" render={ () => <PageContainer /> } />
      <Route exact path="/uranus" render={ () => <PageContainer /> } />
      <Route exact path="/neptune" render={ () => <PageContainer /> } />
      <Route exact path="/pluto" render={ () => <PageContainer /> } />
      </>
    )
  }
}

export default App;
