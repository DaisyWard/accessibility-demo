import React from 'react'

const ToggleButton = ({
  label,
  ariaLabel,
  selected,
  updateSelectedOption
}) => {
  return (
    <button
      className={`toggle-button ${selected ? 'toggle-button-selected' : ''}`}
      type='button'
      onClick={() => updateSelectedOption()}
      aria-label={selected ? `${ariaLabel} selected` : `${ariaLabel}`}
    >
      {label}
    </button>
  )
}

export default ToggleButton
