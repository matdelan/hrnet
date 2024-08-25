import { useState } from 'react'
import './dropdown.css'

const Dropdown = ({ options, label, onSelect, name }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label>{label}</label>
      <select value={selectedOption} onChange={handleChange} className='option__container' name={name}>
        <option value="" disabled>
          -- Sélectionnez une option --
        </option>
        {
          options.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;