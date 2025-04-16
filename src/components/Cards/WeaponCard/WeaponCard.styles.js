import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgb(27, 25, 25); 
  color: #fff;
  padding: 50px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 250px;

  &:hover {
    background-color: #444; 
  }
`;

export const MoreInfo = styled.p`
  color: #fff;
  margin-top: 20px; 
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

export const WeaponImage = styled.img`
  width: 100%;
  max-width: 220px; 
  height: auto;
  border-radius: 8px;
`;