import { Backdrop, ModalContent, CloseButton } from './Modal.styles'; 

function Modal({ children, onClose }) {
  return (
    <Backdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton> 
        {children}
      </ModalContent>
    </Backdrop>
  );
}

export default Modal;