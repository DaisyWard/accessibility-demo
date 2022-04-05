import React from 'react'
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
  return (
    <div className='form-checkbox'>
      <div className='form-checkbox-container'>
        <input
          className='form-checkbox-input'
          id={id}
          name={name}
          defaultChecked={checked}
          type='checkbox'
          aria-required={required}
          aria-invalid={hasErrored}
        />
        <label
          dangerouslySetInnerHTML={{__html: htmlLabel}}
          htmlFor={name}
          className='form-checkbox-label'
        >
          {label}
        </label>
        <span className='form-checkbox-checkmark' onClick={() => console.log('goose')} onChange={() => console.log('goose')} />
      </div>
      {hasErrored && <p className='form-field-error-text js-form-field-haserror' role='alert'>{errorMessage}</p>}
    </div>
  )
}

export default Checkbox
