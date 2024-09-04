import React, { useState } from 'react';
import './DatePickerHtml.css'

const DatePickerHtml = ({ id, content, name, inputRef, errorRef }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
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
        style={{ padding: '8px', width: '200px' }}
        className='datepicker__input'
        ref={inputRef}
      />
    </div>
    <div ref={errorRef} className="error-message" data-error-visible="false"></div>
    </>
  );
};

export default DatePickerHtml;