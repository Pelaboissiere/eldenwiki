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

export const Banner = styled.div`
  width: 100%;
  max-height: 400px;
  margin-top: 2rem;
  overflow: hidden;
  border-radius: 10px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover; 
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    max-height: 300px;  //
  }
`;

export const FeaturedBossWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const FeaturedTitle = styled.h2`
  font-size: 2rem;
  color: #f5c518;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FeaturedImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(180, 158, 86, 0.5);
  cursor: pointer;
  transition: transform 0.3s;
  margin-bottom: 32px;
  
  &:hover {
    transform: scale(1.03);
  }
`;

export const BossName = styled.h1`
  font-size: 28px;
  color: #fff;
  margin-top: 1rem;
`;

export const HighlightedImage = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ModalBossImage = styled.img`
  width: 100%;
  max-height: 450px;
  object-fit: contain;
  border-radius: 10px;
  margin-top: 15px;
`;