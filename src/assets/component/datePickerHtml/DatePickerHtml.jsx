import React, { useState } from 'react';
import './DatePickerHtml.css'

/**
 * Permit to select a date
 * 
 * @param {Object} props - The properties passed to the Dropdown component.
 * @param {Array} props.id - id of the input
 * @param {string} props.label - The label text for the datepicker.
 * @param {React.RefObject} props.inputRef - The reference object for the select input element.
 * @param {React.RefObject} props.errorRef - The optional reference object for handling errors.
 * @returns {React.Component} A React component rendering a select datepicker.
 */
const DatePickerHtml = ({ id, content, name, inputRef, errorRef }) => {
  const [date, setDate] = useState('')

  const handleDateChange = (event) => {
    setDate(event.target.value)
  };

  return (
    <>
    <div className='datepicker__container'>
      <label htmlFor={id} style={{ marginRight: '8px' }}>
        {content}:
      </label>
      <input
        type="date"
        id={id}
        name={name}
        placeholder=''
        value={date}
        onChange={handleDateChange}
        className='datepicker__input'
        ref={inputRef}
      />
    </div>
    <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
  )
}

export default DatePickerHtml