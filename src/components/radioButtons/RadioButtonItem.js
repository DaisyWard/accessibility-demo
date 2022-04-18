import React from 'react'
import './radioButtons.css'

const RadioButtonItem = ({
  id,
  label,
  name,
  value,
  required,
  showError,
  checkErrorState
}) => {
  return (
    <div className='radio-button'>
      <label className='radio-button-label'>
        <input
          className={`radio-button-input ${showError ? 'radio-button-error' : ''}`}
          id={id}
          name={name}
          value={value}
          type='radio'
          defaultChecked={false}
          required={required}
          onClick={() => checkErrorState()}
          onChange={() => checkErrorState()}
          onKeyPress={() => checkErrorState()}
        />
        {label}
      </label>
    </div>
  )
}

export default RadioButtonItem
