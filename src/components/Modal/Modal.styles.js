import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease-out;
`;

export const ModalContent = styled.div`
  background-color: #222;
  color: #fff;
  border-radius: 10px;
  padding: 30px;
  width: 80%;
  max-width: 600px;
  position: relative;
  box-shadow: 0px 4px 10px rgba(180, 158, 86, 0.5);
  animation: scaleUp 0.3s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    0% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #fff;
  font-size: 18px;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f44336;
  }
`;

export const ModalContentInner = styled.div`
  margin-top: 20px;
  font-size: 16px;
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #ff9800;
  font-family: 'Arial', sans-serif;
`;

export const ModalDescription = styled.p`
  color: #ccc;
  line-height: 1.6;
`;

export const ModalImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 15px;
  max-height: 350px;
  object-fit: cover;
`;