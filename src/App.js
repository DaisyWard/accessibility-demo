import './App.css';

import Input from './components/Input'
import Dropdown from './components/Dropdown'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Accessibility</h1>
      </header>
      <section>
        <h2>Personal Details</h2>
        <div class='input-wrapper'>
          <Input
            id='firstName'
            label='First Name'
            required
            hasError={false}
          />
          <Input
            id='lastName'
            label='Last Name'
            required
            hasError={false}
          />
        </div>
        <Dropdown />
      </section>
    </div>
  );
}

export default App;
