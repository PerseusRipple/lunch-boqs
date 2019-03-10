import React, { Component } from 'react'
import Plan from './Plan'

class Plan extends Component {
  render() {
    return (
      <>
        <section className='container'>
          <section className='calendar'>
            <p className='calendar-day' />
            <p className='calendar-date' />
            <p className='calendar-month' />
          </section>
        </section>
      </>
    )
  }
}

export default Plan
