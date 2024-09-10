import { useState } from 'react'
import './dropdown.css'

const Dropdown = ({ options, label, name, inputRef, errorRef }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <select id={label.toLowerCase()}value={selectedOption} onChange={handleChange} className='option__container' name={name} ref={inputRef}>
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
      <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
  );
};

export default Dropdown;