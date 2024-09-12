import { useState } from 'react'
import './dropdown.css'

/**
 * Put the list options in a select dropdown component
 * 
 * @param {Object} props - The properties passed to the Dropdown component.
 * @param {Array} props.options - The list of options for the select dropdown.
 * @param {string} props.label - The label text for the dropdown.
 * @param {React.RefObject} props.inputRef - The reference object for the select input element.
 * @param {React.RefObject} props.errorRef - The optional reference object for handling errors.
 * @returns {React.Component} A React component rendering a select dropdown with options.
 */
const Dropdown = ({ options, label, name, inputRef, errorRef }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <select
        id={label.toLowerCase()}value={selectedOption}
        onChange={handleChange}
        className='option__container'
        name={name}
        ref={inputRef}
        aria-invalid={errorRef ? 'true' : 'false'}
      >
        <option value="" disabled>
          -- Sélectionnez une option --
        </option>
        {
          options.map((option, index) => (
            <option key={index} value={option.name}>
              {option.name}
            </option>
          ))
        }
      </select>
      <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
  );
};

export default Dropdown