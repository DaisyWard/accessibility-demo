import { useState } from 'react'
import './dropdown.css'

const Dropdown = ({
  id,
  label,
  required,
  hasErrored,
  data,
  errorMessage
}) => {
  const [showError, setShowError] = useState(true)

  const checkErrorState = (event) => {
    if (hasErrored && event.target.value === '') setShowError(true)
    else setShowError(false)
  }

  return (
    <div className='select-wrapper'>
      <label className='select-label label' htmlFor={id}>{label}</label>
      <select
        id={id}
        className={`select-input ${hasErrored && showError? 'select-box-error' : ''}`}
        aria-labelledby={id}
        aria-invalid={hasErrored && showError}
        aria-required={required}
        name={id}
        onChange={(event) => checkErrorState(event)}
        defaultValue='default'
      >
        <option value='default' disabled>Please select</option>
        {data.map(show =>
          <option key={show.id}>{show.name}</option>
        )}
      </select>
      {hasErrored && showError && <p className='select-error-message' role='alert'>{errorMessage}</p>}
    </div>
  )
}

export default Dropdown
