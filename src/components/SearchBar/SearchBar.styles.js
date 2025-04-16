import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;

  &::placeholder {
    color: #ccc;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transition: background-color 0.3s ease;
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease;
  }

`;