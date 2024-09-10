import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react'
import { useRef } from 'react'
import { describe, it, expect, vi } from 'vitest'
import Dropdown from '../component/dropdown/Dropdown'
import { departements } from '../__mocks__/departements'

describe('<Dropdown>', () => {
    it('should render correctly', () => {
            const inputDepartementRef = renderHook(() => useRef(null))
            const errorDepartementRef = renderHook(() => useRef(null))
            const {container} = render( 
              <Dropdown options={ departements } label="Departement" name="selectDepartement" inputRef={inputDepartementRef} errorRef={errorDepartementRef}/>
        )
        expect(container).toMatchInlineSnapshot(`
          <div>
            <label
              for="departement"
            >
              Departement
            </label>
            <select
              class="option__container"
              id="departement"
              name="selectDepartement"
            >
              <option
                disabled=""
                value=""
              >
                -- Sélectionnez une option --
              </option>
              <option
                value="Sales"
              >
                Sales
              </option>
              <option
                value="Marketing"
              >
                Marketing
              </option>
              <option
                value="Engineering"
              >
                Engineering
              </option>
              <option
                value="Human ressources"
              >
                Human ressources
              </option>
              <option
                value="Legal"
              >
                Legal
              </option>
            </select>
            <div
              class="error-message"
              data-error-visible="false"
            />
          </div>
        `)

    })
})