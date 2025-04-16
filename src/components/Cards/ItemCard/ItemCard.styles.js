import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgba(50, 50, 50, 0.7);
  color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);

  &:hover {
    background-color: rgba(70, 70, 70, 0.9);
    transform: scale(1.03);
  }
`;

export const MoreInfo = styled.p`
  color: #ccc;
  margin-top: 15px;
  font-size: 12px;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;