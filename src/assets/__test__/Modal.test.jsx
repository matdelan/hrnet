import { render, screen, fireEvent, waitFor, renderHook } from '@testing-library/react';
import { useState, useRef } from 'react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import Modal from '../component/modal/Modal';

describe('<Modal>', () => {
  beforeAll(() => {
    // Mock des méthodes showModal et close pour l'élément dialog
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it('should render correctly', () => {
    // Utilisation de useState pour contrôler l'ouverture de la modal
    const { result: isModalOpenResult } = renderHook(() => useState(false));
    const [isModalOpen, setIsModalOpen] = isModalOpenResult.current;

    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Utilisation de useRef pour créer une référence pour la modal
    const { result: dialogRefResult } = renderHook(() => useRef(null));
    const dialogRef = dialogRefResult.current;

    const { container } = render(
      <Modal isOpen={isModalOpen} onClose={closeModal} ref={dialogRef}>
        Employee Created!
      </Modal>
    );

    // Ouvrir la modal en changeant l'état
    openModal();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <dialog
          class="dialog"
        >
          <div
            class="dialog__container"
          >
            <div
              class="dialog__close-button"
            >
              ×
            </div>
            Employee Created!
          </div>
        </dialog>
      </div>
    `);
  });
  it('should call showModal when isOpen is true', () => {
    const onClose = vi.fn();  // Mock de la fonction onClose

    render(<Modal isOpen={true} onClose={onClose}>Content</Modal>);

    // Vérifier si showModal a été appelée
    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it('should call onClose when the close button is clicked', () => {
    const onClose = vi.fn();  // Mock de la fonction onClose

    render(<Modal isOpen={true} onClose={onClose}>Content</Modal>);

    // Sélectionner le bouton de fermeture (la croix) par son rôle ou son texte
    const closeButton = screen.getByText('×');

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
