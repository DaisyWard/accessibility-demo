import { useState } from 'react'

import './TextField.css'

import Tooltip from '../tooltip/Tooltip'

const TextField = ({
  id,
  label,
  explanationText,
  required,
  hasErrored,
  errorMessage,
  maxLength,
  tooltipText
}) => {

  const [showError, setShowError] = useState(true)

  const checkErrorState = (event) => {
    if (hasErrored && event.target.value === '') setShowError(true)
    else setShowError(false)
  }

  return (
    <div className='input-container'>
      <div className='input-label-wrapper'>
        <label className='input-label label' htmlFor={id}>{label}</label>
        {tooltipText && <Tooltip tooltipText={tooltipText} />}
      </div>
      <input
        className={`input-box ${hasErrored && showError ? 'input-box-error' : ''}`}
        id={id}
        type='text'
        maxLength={maxLength ? maxLength : 35}
        aria-label={tooltipText ? `${label} ${tooltipText}` : label}
        required={required}
        aria-invalid={hasErrored && showError}
        name={label}
        onChange={(event) => checkErrorState(event)}
        autoComplete='off'
      />
      {hasErrored && showError && <p role='alert' aria-describedby={id} className='input-error-message'>{errorMessage}</p>}
    </div>
  )
}

export default TextField