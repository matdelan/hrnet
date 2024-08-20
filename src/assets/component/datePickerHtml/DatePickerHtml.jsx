import React, { useState } from 'react'
import './DatePickerHtml.css' 

function DatePickerHtml() {
  const [selectedDate, setSelectedDate] = useState('')
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
    setShowDatePicker(false)
  };

  const handleInputClick = () => {
    setShowDatePicker(!showDatePicker)
  };

  return (
    <div className="datepicker__container">
      <input
        className="datepicker__input"
        type="text"
        placeholder="Select a date"
        value={selectedDate}
        onClick={handleInputClick}
        readOnly
      />
      {showDatePicker && (
        <input
          className="datepicker__input-picker"
          type="date"
          onChange={handleDateChange}
        />
      )}
    </div>
  )
}

export default DatePickerHtml