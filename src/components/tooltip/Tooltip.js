import React from 'react'

import './tooltip.css'

const Tooltip = ({ tooltipText }) => {
  return (
    <div role='tooltip' className='tooltip'>i
      <p className='tooltip-text'>{tooltipText}</p>
    </div>
  )
}

export default Tooltip