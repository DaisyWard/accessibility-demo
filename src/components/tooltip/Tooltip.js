import React from 'react'

import './tooltip.css'

const Tooltip = ({ tooltipText }) => {
  return (
    <div role='tooltip' class='tooltip'>i
      <p class='tooltip-text'>{tooltipText}</p>
    </div>
  )
}

export default Tooltip