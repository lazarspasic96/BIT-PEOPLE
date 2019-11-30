import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './Main';
import { HashRouter } from "react-router-dom"



class App extends React.Component {

  render() {
    return <>
      <Header />
      <Main />
      <Footer />

    </>
  }
}




export default App;