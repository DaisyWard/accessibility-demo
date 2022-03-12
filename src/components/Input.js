import './Input.css'

const Input = ({ id, label, explanationText, required, hasError }) => {
  return (
    <div className='input-container'>
      <label className='input-label' for={id}>{label}</label>
      <input
        className='input-box'
        id={id}
        type='text'
        maxLength={35}
        aria-label={explanationText ? `${label} ${explanationText}` : label}
        aria-required={required}
        aria-invalid={hasError}
      />
    </div>
  )
}

export default Input