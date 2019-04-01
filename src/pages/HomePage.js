import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <section className='topnav'>
            <section className='login-container'>
              <button className='login' type='submit'>
                Login
              </button>

              <button className='signUp' type='submit'>
                Sign Up
              </button>
              {/* <form action='/action_page.php'>
      <input type='text' placeholder='Username' name='username' />
      <input type='text' placeholder='Password' name='psw' /> 
    </form> */}
            </section>
          </section>
        </header>

        {/* <a class='active' href='#home'>
      Home
    </a> */}
        {
          // <img
          //   src='./images/logo_transparent.png'
          //   alt='company logo'
          //   width='130'
          //   height='35'
          // />
        }

        <section className='main-banner'>
          <section className='container'>
            <section className='headline'>
              <a href='#'>
                {/* <img
          scr='./images/logo.png'
          alt='LOGO'
          width='560'
          height='560'
        /> */}
              </a>
              <h2>Keep Midday Simple.</h2>
            </section>
          </section>
        </section>

        {/* <section className='flex-container'>  */}
        <section className='selector-container'>
          <button type='submit'>Plan</button>
          <button type='submit'>Pack</button>
          <button type='submit'>Eat</button>
        </section>
        {/* </section> */}

        <section className='bottom-container' />

        {/* <footer className='footer'>© LunchBoqs™ 2019</footer> */}
        {/* <Plan />
        <Pack /> */}
      </div>
    )
  }
}

export default HomePage
