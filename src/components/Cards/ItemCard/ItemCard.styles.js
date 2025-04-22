import styled from 'styled-components';

export const Card = styled.div`
  background-color: rgba(50, 50, 50, 0.7);
  color: #fff;
  padding: 15px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  max-width: 250px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:hover {
    background-color: rgba(70, 70, 70, 0.9);
    transform: scale(1.05);
  }
`;

export const CardName = styled.h3`
    margin-bottom: 30px;
`

export const MoreInfo = styled.p`
  color: #ccc;
  margin-top: 15px;
  font-size: 12px;
  position: absolute;
  bottom: 10px; 
  text-align: center;
  left: 15px;
  right: 15px;
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