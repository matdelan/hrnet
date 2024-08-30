import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Index from '../pages/index/Index';
import useEmployeeStore from '../../store';
import Input from '../component/input/Input';


describe('<Index>', () => {
    it('should render correctly', () => {
        const {container} = render( <Input /> )

    });

});