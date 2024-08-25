import React, { useState } from 'react';
import './DatePickerHtml.css'

const DateInput = ({ id, content, name }) => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
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
      />
    </div>
  );
};

export default DateInput;