import { useEffect, useState } from 'react';
import Modal from '../../components/Modal/Index';
import {
  FeaturedBossWrapper,
  FeaturedTitle,
  FeaturedImage,
  HomeContainer,
  Title,
  Subtitle,
  BossName,
  ModalBossImage
} from './Home.styles';
import Header from '../../components/Header/Index';
import { getBosses } from '../../services/bossService'; 

const Home = () => {
  const [featuredBoss, setFeaturedBoss] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchRandomBoss = async () => {
      try {
        const bosses = await getBosses();
        const randomIndex = Math.floor(Math.random() * bosses.length);
        setFeaturedBoss(bosses[randomIndex]);
      } catch (error) {
        console.error('Erro ao buscar boss aleatório:', error);
      }
    };

    fetchRandomBoss();
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

      {featuredBoss && (
        <FeaturedBossWrapper>
          <FeaturedTitle>Boss em destaque:</FeaturedTitle>
          <BossName>{featuredBoss.name}</BossName>
          <FeaturedImage
            src={featuredBoss.image}
            alt={featuredBoss.name}
            onClick={() => setIsOpen(true)}
          />
        </FeaturedBossWrapper>
      )}

      {isOpen && featuredBoss && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>
            <h2>{featuredBoss.name}</h2>
            <p><strong>Localização:</strong> {featuredBoss.location}</p>
            <p><strong>Recompensas:</strong> {featuredBoss.drops}</p>
            <p><strong>Descrição:</strong> {featuredBoss.description || 'Sem descrição'}</p>
            <ModalBossImage
              src={featuredBoss.image}
              alt={featuredBoss.name}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Home;
