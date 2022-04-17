import React, { useState } from 'react'
import './toggleButton.css'

import ToggleButton from './ToggleButton'

const ToggleButtons = ({
  data,
  label,
  errorMessage,
  ariaLabel,
  hasErrored
}) => {

  const [selectedOption, setSelectedOption] = useState(false)

  return (
    <div>
      <label className='toggle-buttons-label label'>{label}</label>
      <div className='toggle-button-wrapper'>
        {data.map(option =>
          <ToggleButton
            key={option.id}
            groupLabel={label}
            label={option.label}
            selected={selectedOption === option.id}
            ariaLabel={option.ariaLabel}
            updateSelectedOption={() => setSelectedOption(option.id)}
            hasError={hasErrored && selectedOption === false}
          />
        )}
      </div>
      {hasErrored && selectedOption === false && <p role='alert' className='toggle-button-error-message'>{errorMessage}</p>}
    </div>
  )
}

export default ToggleButtons
