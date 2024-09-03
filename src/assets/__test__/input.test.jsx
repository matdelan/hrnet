import Input from '../component/input/Input';
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { describe, it, expect, vi } from 'vitest';

describe('<Input>', () => {
    it('should render correctly', () => {
            const inputFirstNameRef = renderHook(() => useRef(null))
            const errorFirstNameRef = renderHook(() => useRef(null))
            const {container} = render( 
                <Input id="first-name" content="First Name" name="inputFirstName" inputRef={inputFirstNameRef} errorRef={errorFirstNameRef}/>
        )
        expect(container).toMatchInlineSnapshot(`
          <div>
            <label
              for="first-name"
            >
              First Name
            </label>
            <input
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