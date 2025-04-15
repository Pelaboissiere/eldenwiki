import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;  /* Garante que o conteúdo seja empilhado verticalmente */
  justify-content: flex-start;  /* Alinha o conteúdo ao topo */
  align-items: center;  /* Centraliza o conteúdo horizontalmente */
  padding: 2rem;
  box-sizing: border-box;
`;

export const Content = styled.div`
  max-width: 1200px; 
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px;
  background-color: #1a1a1a;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const BossGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 42px;
`;

export const BossImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageCard = styled.img`
  width: 120px;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;