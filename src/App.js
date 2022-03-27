import './App.css'
import './components/button.css'

import React, { useState } from 'react'

import Input from './components/Input'
import Dropdown from './components/Dropdown'

function App() {
  const [errorState, setErrorState] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        {/* Accessibile logo */}
        <h1>Daisy's Accessibility Demo</h1>
        {/* Decorative Image */}
      </header>
      <section>
        <h2>Personal Details</h2>
        <div className='input-wrapper'>
          <Input
            id='firstName'
            label='First Name'
            required
            hasError={errorState}
            errorMessage={'Please enter your first name'}
          />
          <Input
            id='lastName'
            label='Last Name'
            required
            hasError={errorState}
            errorMessage={'Please enter your last name'}
          />
        </div>
        <Dropdown />
        {/* Button for a modal popup form
          will including button as a link
          Roving tab
        */}
        {/* Another h tag, not in order */}
        {/*
            Custom toggle button
          */}
        {/*  */}
        {/* Button to trigger loading spinner */}
        <button className='button submit-button' aria-label='Submit personal details form' onClick={() => setErrorState(!errorState)}>Submit</button>
      </section>
    </div>
  );
}

export default App;
