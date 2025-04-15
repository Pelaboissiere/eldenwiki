import styled from 'styled-components';

export const Card = styled.div`
  background-color:rgb(128, 104, 27);
  color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 250px;

  &:hover {
    background-color: #333;
  }
`;

export const MoreInfo = styled.p`
  color: #fff;
  margin-top: 30px;
  font-size: 12px;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

