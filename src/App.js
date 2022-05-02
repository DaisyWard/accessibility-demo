import './App.css'
import './components/button.css'

import React, { useState } from 'react'

import TextField from './components/textField/TextField'
import Dropdown from './components/dropdown/Dropdown'
import RadioButtons from './components/radioButtons/RadioButtons'
import Checkbox from './components/checkbox/Checkbox'
import ToggleButtons from './components/toggleButtons/ToggleButtons'
import Modal from './components/modal/Modal'
import Search from './components/search/Search'

import logoPNG from './images/logo.png'

import dropdownData from './data/dropdown'
import toggleButtonData from './data/toggleButton'

function App() {
  const [errorState, setErrorState] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-Header-Logo'>
          <a href='/' aria-label='Navigate to home page'>
            <img className='logo' alt={`Daisy's accessible demo logo`} src={logoPNG} />
          </a>
          <h1>Daisy's Accessibility Demo</h1>
        </div>
        <Search />
      </header>
      <main>
        <div className='headers'>
          <h2>Personal Details</h2>
          <h3 className='as-h4'>Tell us a bit about yourself</h3>
        </div>

        <form>
          <div className='input-wrapper'>
            <TextField
              id='firstName'
              label='First Name'
              required
              hasErrored={errorState}
              errorMessage='Please enter your first name'
              tooltipText='You do not need to include any middle names'
            />
            <TextField
              id='lastName'
              label='Last Name'
              required
              hasErrored={errorState}
              errorMessage={'Please enter your last name'}
            />
          </div>
          <Dropdown
            id='tvDropdown'
            label='Select your favourite TV show'
            required={true}
            hasErrored={errorState}
            data={dropdownData}
            errorMessage='Please select a TV show from the list'
          />

          <RadioButtons
            label={'Select your favourite pet'}
            hasErrored={errorState}
            errorMessage={'Please select a pet'}
          />

          <h3 className='additional-header as-h4'>Some additional things we need to know...</h3>

          <ToggleButtons
            data={toggleButtonData}
            label='Do you own an electric car?'
            errorMessage='Please select an option'
            required={true}
            hasErrored={errorState}
          />

          <Checkbox
            htmlLabel='I accept the terms and conditions'
            name='privacy'
            id='privacy'
            value={false}
            checked={false}
            errorMessage='Please accept the terms and conditions'
            hasErrored={errorState}
            required
          />

          <button
            className='button'
            type='button'
            aria-label='Read the terms and conditions in a dialog window'
            onClick={() => setShowModal(true)}
          >
            Read the terms and conditions
          </button>

          {showModal &&
            <Modal
              id='tandcs'
              closeModal={() => setShowModal(false)}
            />
          }

          <button
            className='button submit-button'
            type='button'
            aria-label='Submit personal details form'
            onClick={() => setErrorState(!errorState)}
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  )
}

export default App
