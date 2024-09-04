
import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import ShowEmployees from '../component/showemployees/ShowEmployees';
import { mockListEmployee } from '../__mocks__/listEmployee';

describe('<ShowEmployees>', () => {
    it('should render correctly', () => {
            const {container} = render( 
              <ShowEmployees employees={mockListEmployee.data} />
        )
        expect(container).toMatchSnapshot()
    })
})