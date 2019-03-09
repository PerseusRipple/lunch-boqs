import React, { Component } from 'react'

import axios from 'axios'

class App extends Component {
  render() {
    return (
      <>
        <section className='topnav'>
          {/* <a class='active' href='#home'>
            Home
          </a> */}
          <section className='login-container'>
            <button type='submit'>Login</button>
            <button type='submit'>Sign Up</button>
            {/* <form action='/action_page.php'>
              <input type='text' placeholder='Username' name='username' />
              <input type='text' placeholder='Password' name='psw' /> 
            </form> */}
          </section>
        </section>

        <section className='main-container'>
          <h1 className='company-box'>LunchBoqs</h1>
        </section>
        <section className='bottom-container' />
        <footer className='footer'>Made with 💝 from SDG 2019</footer>
      </>
    )
  }
}

export default App
