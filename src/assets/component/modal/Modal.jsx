import { useRef,useEffect } from 'react';

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
    <dialog ref={dialog} onClose={onClose}>
      <div>
        <button onClick={onClose}>&times;</button>
        {children}
      </div>
    </dialog>
  );
};

export default Modal;