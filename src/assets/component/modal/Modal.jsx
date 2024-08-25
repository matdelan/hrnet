import { useRef,useEffect } from 'react'
import './modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  const dialog = useRef(null);

  // Ouvre ou ferme la fenêtre modale en fonction de `isOpen`
  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialog} onClose={onClose} className='dialog'>
      <div className="dialog__container">
        <div className="dialog__close-button" onClick={onClose}>&times;</div>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;