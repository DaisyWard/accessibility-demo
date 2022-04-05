import './App.css'
import './components/button.css'

import React, { useState } from 'react'

import TextField from './components/textField/TextField'
import Dropdown from './components/dropdown/Dropdown'
import RadioButton from './components/radioButton/RadioButton'
import Checkbox from './components/checkbox/Checkbox'

import logoPNG from './images/logo.png'
import searchPNG from './images/search.png'

import radioButtonData from './data/radioButton'

function App() {
  const [errorState, setErrorState] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-Header-Logo'>
          <img className='logo' alt={`Daisy's accessible demo logo. Navigate to home page`} src={logoPNG} />
          <h1>Daisy's Accessibility Demo</h1>
        </div>
        <img className='search-icon' alt={'Sitewide search'} src={searchPNG} />
      </header>
      <section>
        <div className='headers'>
          <h2>Personal Details</h2>
          <h3 className='as-h4'>Tell us a bit about yourself</h3>
        </div>
        <div className='input-wrapper'>
          <TextField
            id='firstName'
            label='First Name'
            required
            hasError={errorState}
            errorMessage={'Please enter your first name'}
          />
          <TextField
            id='lastName'
            label='Last Name'
            required
            hasError={errorState}
            errorMessage={'Please enter your last name'}
          />
        </div>
        <Dropdown />

        <div role='radiogroup' className='radio-buttons' aria-labelledby='animal-radio-buttons'>
          <p id='animal-radio-buttons'>Select your favourite pet</p>
          {radioButtonData.map(animal =>
            <RadioButton
              key={animal.id}
              id={animal.id}
              label={animal.label}
              name='animal'
              // value?
              // checked?
            />
          )}
          {errorState && <p role='alert'>Please select a pet</p>}
        </div>

        {/* Custom toggle button - PHC/MFV? */}

        <div>
          <Checkbox
            htmlLabel={'I accept the terms and conditions'}
            name='privacy'
            id='privacy'
            value={false}
            checked={false}
            errorMessage={'Please accept the terms and conditions'}
            hasErrored={false}
            required
          />
        </div>

        <h4 className='as-h3'>Some additional things we need to know...</h4>


        {/* Another h tag, not in order */}
        {/* Button for a modal popup form
          will including button as a link
          Roving tab - PHC?
        */}


        {/* Button to trigger loading spinner - Stretch*/}
        {/* Set up Eslint A11y */}
        <button className='button submit-button' aria-label='Submit personal details form' onClick={() => setErrorState(!errorState)}>Submit</button>
      </section>
    </div>
  );
}

export default App;
