import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;