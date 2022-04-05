import React, { useState } from 'react'

const RadioButton = ({
  id,
  label,
  name,
  value
}) => {
  const [checkedValue, setCheckedValue] = useState(false)

  return (
    <div className='radio-button'
      onClick={() => setCheckedValue(true)}
      onChange={() => setCheckedValue(true)}
      onKeyPress={() => setCheckedValue(true)}
      onFocus={() => setCheckedValue(true)}
      onBlur={() => setCheckedValue(false)}
    >
      <label className='radio-button-label'>
        <input
          className='radio-button-input'
          id={id}
          name={name}
          value={value}
          type='radio'
          defaultChecked={checkedValue}
        />
        {label} {checkedValue}
      </label>
    </div>
  )
}

export default RadioButton
