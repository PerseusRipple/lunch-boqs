import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <>
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
      </>
    )
  }
}

export default Header
