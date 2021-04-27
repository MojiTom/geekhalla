import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Reservations from './ReservationComponent';
import Choices from './MenuComponent' // React has other uses for "menu" so - Choices.
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {

  render() {
    const HomePage = () => {
      return (
        <Home />
      );
    }; 

    return (
        <div>
            <Header />
            <Switch>
              <Route path='/home' component={HomePage} /> 
              <Route exact path='/contactus' component={Contact} />
              <Route exact path='/menu' component={Choices} />
              <Route exact path='/reservations' component={Reservations} />
              <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
  }
}

export default Main;

//export default withRouter(connect(mapStateToProps)(Main));