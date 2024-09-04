import DatePickerHtml from '../component/datePickerHtml/DatePickerHtml'
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { describe, it, expect, vi } from 'vitest'

describe('<DatePickerHtml>', () => {
    it('should render correctly', () => {
        const inputDateStartRef = renderHook(() => useRef(null))
        const errorDateStartRef = renderHook(() => useRef(null))
        const {container} = render( 
          <DatePickerHtml id="start-date" content="Start Date" name="inputDateStart" inputRef={inputDateStartRef} errorRef={errorDateStartRef}/>
        )
        expect(container).toMatchInlineSnapshot(`
          <div>
            <div
              class="datepicker__container"
            >
              <label
                for="start-date"
                style="margin-right: 8px;"
              >
                Start Date
                :
              </label>
              <input
                class="datepicker__input"
                id="start-date"
                name="inputDateStart"
                placeholder=""
                style="padding: 8px; width: 200px;"
                type="date"
                value=""
              />
            </div>
            <div
              class="error-message"
              data-error-visible="false"
            />
          </div>
        `)

    })
})