import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Index from '../pages/index/Index';
import useEmployeeStore from '../../store';
import Input from '../component/input/Input';
import { useRef } from 'react';


describe('<Index>', () => {
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

        
    });

});