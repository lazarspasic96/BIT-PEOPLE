import React from 'react';
import './App.css';
import Header from './components/Header';
import AboutHeader from './components/AboutHeader';
import Footer from './components/Footer';
import Main from './Main';
import { Route } from "react-router-dom"



class App extends React.Component {

  render() {
    return (

      <>
        <header>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={AboutHeader} />
        </header>
        <Main />
        <Footer />
      </>
    )
  }

}




export default App;