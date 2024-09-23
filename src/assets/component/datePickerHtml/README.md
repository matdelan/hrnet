# DatePickerHtml Component

`DatePickerHtml`  is a React component permit to select a date with an input

## Prérequis

- **React** (minimum version 16.8)
- **Node.js**(minimum version 14.x)

## Install

npm -i datepickerhtml

## Exemple

Use inputRef.current.value for get the date value
Use errorRef.current.value for add an error message or not with ''

```javascript
import React, { useRef } from 'react'
import DatePickerHtml from './DatePickerHtml'

function App() {
  const inputRef = useRef(null)
  const errorRef = useRef(null)

  return (
    <>
      <h1>Exemple of DatePickerHtml</h1>
      <DatePickerHtml
        id="datePicker1"
        content="Select a date"
        name="date"
        inputRef={inputRef}
        errorRef={errorRef}
      />
    </>
  )
}

export default App
