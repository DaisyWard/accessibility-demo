import React from 'react'

const ToggleButton = ({
  label,
  ariaLabel,
  selected,
  updateSelectedOption,
  hasError
}) => {
  return (
    <button
      className={`toggle-button ${selected ? 'toggle-button-selected' : ''} ${hasError ? 'toggle-button-error' : ''}`}
      type='button'
      onClick={() => updateSelectedOption()}
      aria-label={ariaLabel}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}

export default ToggleButton
