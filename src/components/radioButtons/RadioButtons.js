import React, { useState } from 'react'
import './radioButtons.css'

import radioButtonData from '../../data/radioButton'

import RadioButtonItem from './RadioButtonItem'

const RadioButton = ({
  label,
  hasErrored,
  errorMessage
}) => {
  const [showError, setShowError] = useState(true)

  return (
    <fieldset role='radiogroup' className='radio-buttons' aria-labelledby='animal-radio-buttons'>
      <legend id='animal-radio-buttons' className='radio-buttons-label'>{label}</legend>

      {radioButtonData.map(animal =>
        <RadioButtonItem
          key={animal.id}
          id={animal.id}
          label={animal.label}
          name='animal'
          required={true}
          showError={hasErrored && showError}
          checkErrorState={() => setShowError(false)}
          value={animal.label}
        />
      )}
      {hasErrored && showError && <p role='alert' className='radio-buttons-error-message'>{errorMessage}</p>}
    </fieldset>
  )
}

export default RadioButton
