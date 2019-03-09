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
          <img
            src='./images/logo_transparent.png'
            // alt='company logo'
            width='130'
            height='90'
          />
          <section className='login-container'>
            <button type='submit'>Login</button>
            <button type='submit'>Sign Up</button>
            {/* <form action='/action_page.php'>
              <input type='text' placeholder='Username' name='username' />
              <input type='text' placeholder='Password' name='psw' /> 
            </form> */}
          </section>
        </section>

        <section className='content'>
          <section className='flex-container'>
            <section className='company-box'>
              <section className='image-content'>
                <a href='#'>
                  {/* <img
                scr='./images/logo.png'
                alt='LOGO'
                width='560'
                height='560'
              /> */}
                </a>
              </section>
              <h2>Keep Midday Simple.</h2>
            </section>
          </section>
          <section className='bottom-container' />
        </section>
        <footer className='footer'>
          Made with{' '}
          <span role='img' alt='heart emoji'>
            💝
          </span>{' '}
          from SDG 2019
        </footer>
      </>
    )
  }
}

export default App
