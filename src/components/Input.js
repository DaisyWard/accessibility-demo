import './Input.css'

const Input = ({ id, label, explanationText, required, hasError, errorMessage }) => {
  return (
    <div className='input-container'>
      <label className='input-label' htmlFor={id}>{label}</label>
      {/* Tooltip */}
      <input
        className={`input-box ${hasError ? 'input-box-error' : ''}`}
        id={id}
        type='text'
        maxLength={35}
        aria-label={explanationText ? `${label} ${explanationText}` : label}
        aria-required={required}
        aria-invalid={hasError}
      />
      {hasError && <p role='alert' aria-describedby={id} className='input-error-message'>{errorMessage}</p>}
    </div>
  )
}

export default Input