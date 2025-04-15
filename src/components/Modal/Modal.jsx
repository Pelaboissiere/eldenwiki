import { Backdrop, ModalContent } from '.';

function Modal({ children, onClose }) {
  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Fechar</button>
        {children}
      </ModalContent>
    </Backdrop>
  );
}

export default Modal;
