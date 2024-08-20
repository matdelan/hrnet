import { useState } from 'react';

const Dropdown = ({ options, label, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div>
      <label>{label}</label>
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          -- Sélectionnez une option --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;