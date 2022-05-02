import React, { useState } from 'react'
import './checkbox.css'

const Checkbox = ({
  htmlLabel,
  label,
  name,
  id,
  value,
  checked,
  errorMessage,
  hasErrored,
  required
}) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  return (
    <div className='form-checkbox'>
      <div className='form-checkbox-container'>
        <input
          className={`form-checkbox-input ${hasErrored && !checkboxChecked ? 'form-checkbox-input-error' : ''}`}
          id={id}
          name={name}
          defaultChecked={checked}
          type='checkbox'
          aria-required={required}
          aria-invalid={hasErrored}
          onClick={(event) => setCheckboxChecked(event.target.checked)}
        />
        <label
          dangerouslySetInnerHTML={{__html: htmlLabel}}
          htmlFor={id}
          className='form-checkbox-label'
        >
          {label}
        </label>
        <span className='form-checkbox-checkmark' />
      </div>
      {hasErrored && !checkboxChecked && <p className='checkbox-error-message' role='alert'>{errorMessage}</p>}
    </div>
  )
}

export default Checkbox
