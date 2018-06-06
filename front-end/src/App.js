import React, { Component } from 'react';
import router from './router'
import { CookiesProvider } from 'react-cookie'
import './normalize.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        {router}
      </ CookiesProvider>  
    );
  }
}

export default App;
