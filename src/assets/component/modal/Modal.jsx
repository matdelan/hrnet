import { useRef, useEffect, forwardRef } from 'react';
import './modal.css';

/**
 * Modal component that displays a modal dialog.
 *
 * @param {Object} props - The properties passed to the Dropdown component.
 * @param {boolean} props.isOpen - State indicating if the modal is open.
 * @param {Function} props.onClose - Function to close the modal.
 * @param {React.ReactNode} props.children - Content to display inside the modal.
 * @param {React.RefObject} ref - A reference to the dialog element.
 * @returns {React.Component} A React component rendering a modal dialog.
 */
const Modal = forwardRef(({ isOpen, onClose, children }, ref) => {
  const internalDialogRef = ref || useRef(null);

  // Ouvre ou ferme la fenêtre modale en fonction de `isOpen`
  useEffect(() => {
    if (isOpen && internalDialogRef.current) {
      internalDialogRef.current.showModal();
    } else if (internalDialogRef.current) {
      internalDialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={internalDialogRef} onClose={onClose} className="dialog">
      <div className="dialog__container">
        <div className="dialog__close-button" onClick={onClose}>
          &times;
        </div>
        {children}
      </div>
    </dialog>
  );
});

export default Modal;