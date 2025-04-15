import Header from '../../components/Header/Index';
import { HomeContainer, Title, Subtitle } from './Home.styles';

const Home = () => {
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
    </>
  );
};

export default Home;
