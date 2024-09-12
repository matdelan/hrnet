import Input from '../component/input/Input';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { describe, it, expect, vi } from 'vitest';

describe('<Input>', () => {
    it('should render correctly', () => {
            const {result : inputFirstNameRef} = renderHook(() => useRef(null))
            const {result : errorFirstNameRef} = renderHook(() => useRef(null))
            const {container} = render( 
                <Input id="first-name" content="First Name" name="inputFirstName" inputRef={inputFirstNameRef.current} errorRef={errorFirstNameRef.current}/>
        )
        expect(container).toMatchInlineSnapshot(`
          <div>
            <label
              for="first-name"
            >
              First Name
            </label>
            <input
              autocomplete="on"
              class="input__style"
              id="first-name"
              name="inputFirstName"
              type="text"
            />
            <div
              class="error-message"
              data-error-visible="false"
            />
          </div>
        `)

    })
})