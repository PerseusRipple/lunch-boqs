import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Header from './pages/Header'
import SplashPage from './pages/SplashPage'
import Plan from './pages/Plan'
import Pack from './pages/Pack'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Header} /> */}
          <Route exact path='/' component={SplashPage} />
          <Route exact path='/:plan' component={Plan} />
          <Route exact path='/:pack' component={Pack} />
        </Switch>
      </Router>
    )
  }
}
export default App

{
  /* <a class='active' href='#home'>
      Home
    </a> */
}
//           {
//             <img
//               src='./images/logo_transparent.png'
//               alt='company logo'
//               width='130'
//               height='35'
//             />
//           }

//         <section className='main-banner'>
//           <section className='container'>
//             <section className='headline'>
//               <a href='#'>
//                 {/* <img
//           scr='./images/logo.png'
//           alt='LOGO'
//           width='560'
//           height='560'
//         /> */}
//               </a>
//               <h2>Keep Midday Simple.</h2>
//             </section>
//           </section>
//         </section>

//         {/* <section className='flex-container'>  */}
//         <section className='selector-container'>
//           <button type='submit'>Plan</button>
//           <button type='submit'>Pack</button>
//           <button type='submit'>Eat</button>
//         </section>
//         {/* </section> */}

//         <section className='bottom-container' />

//         {/* <footer className='footer'>© LunchBoqs™ 2019</footer> */}
//         <Plan />
//         <Pack />
//
//
//
//
