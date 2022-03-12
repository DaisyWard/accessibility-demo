import './Input.css'

const Input = ({ id, label, explanationText, required, hasError }) => {
  return (
    <select>
      <option>Please select</option>
      <option>Goose</option>
    </select>
  )
}

export default Input