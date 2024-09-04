import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { useState, useRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import Modal, { ModalWithContext } from '../component/modal/Modal';

describe('<Modal>', () => {
  const { result: isModalOpenResult } = renderHook(() => useState(false))

  const [isModalOpen, setIsModalOpen] = isModalOpenResult.current

    const openModal = (event) => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }
    it('should render correctly', () => {
            const dialog = renderHook(() => useRef(null))
            /*const {container} = render( 
              <Modal isOpen={isModalOpen} onClose={closeModal} ref={dialog}> Employee Created!</Modal>
        )*/
        //expect(container).toMatchInlineSnapshot()

    })
})