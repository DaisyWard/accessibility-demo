import './dropdown.css'

const Dropdown = ({ id, label, explanationText, required, hasError }) => {
  return (
    <div className='select-wrapper'>
    <label className='select-label'>Select your favourite TV show</label>
    <select className='select-input'>
      <option>Please Select</option>
      <option>Halo</option>
      <option>The Last Kingdom</option>
      <option>Bridgerton</option>
      <option>Top Boy</option>
      <option>Peaky Blinders</option>
      <option>The Walking Dead</option>
      <option>Eurphoria</option>
      <option>Attack on Titan</option>
      <option>Human Resources</option>
      <option>The Gilded Age</option>
      <option>Game of Thrones</option>
    </select>
    </div>
  )
}

export default Dropdown