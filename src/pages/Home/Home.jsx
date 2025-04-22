import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Index';
import MalikethImage from '../../assets/maliketh.png'; 
import { FeaturedBossWrapper, FeaturedTitle, FeaturedImage, HomeContainer, Title, Subtitle, BossName } from './Home.styles';
import Header from '../../components/Header/Index';

const Home = () => {
  const [maliketh, setMaliketh] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const fetchMaliketh = async () => {
      try {
        const response = await fetch('https://eldenring.fanapis.com/api/bosses?name=Maliketh');
        const data = await response.json();
        if (data && data.data.length > 0) {
          setMaliketh(data.data[0]);
        }
      } catch (error) {
        console.error('Erro ao buscar Maliketh:', error);
      }
    };

    fetchMaliketh();
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <Title>Bem-vindo à Elden Wiki</Title>
        <Subtitle>
          Aqui você encontrará tudo sobre o universo de Elden Ring — desde os bosses mais imponentes até os itens mais raros, armas lendárias e encantamentos poderosos.
          <br /><br />
          Use o menu acima para navegar pelas seções e explorar os segredos das Terras Intermédias.
        </Subtitle>
      </HomeContainer>

      <FeaturedBossWrapper>
        <FeaturedTitle>Boss em destaque:</FeaturedTitle>
        <BossName>Maliketh, a Lâmina Negra</BossName>
        <FeaturedImage
          src={MalikethImage} 
          alt="Maliketh Elden Ring"
          onClick={() => setIsOpen(true)} 
        />
      </FeaturedBossWrapper>

      {isOpen && maliketh && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>
            <h2>{maliketh.name}</h2>
            <p><strong>Localização:</strong> {maliketh.location}</p>
            <p><strong>Recompensas:</strong> {maliketh.drops}</p>
            <p><strong>Descrição:</strong> {maliketh.description || 'Sem descrição'}</p>
            <img src={maliketh.image} alt={maliketh.name} style={{ width: '100%', borderRadius: '10px' }} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
