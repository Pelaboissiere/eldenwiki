import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #1e1e1e;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: #fff;
  box-sizing: border-box;
  
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #f5c518;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

export const BossImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.5s;

  &:hover {
    margin-bottom: 5px;
    transform: scale(1.05);
  }
`;