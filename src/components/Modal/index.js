import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #111;
  color: #fff;
  padding: 30px;
  border-radius: 12px;
  width: 80%;
  max-width: 500px;
  position: relative;

  button {
    position: absolute;
    top: 15px;
    right: 15px;
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
  }
`;
