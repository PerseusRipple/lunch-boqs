import React, { Component } from 'react'
import SplashPage from './components/SplashPage'
import Plan from './components/Plan'

import axios from 'axios'

class App extends Component {
  render() {
    return (
      <>
        <SplashPage />
        <Plan />
      </>
    )
  }
}

export default App
