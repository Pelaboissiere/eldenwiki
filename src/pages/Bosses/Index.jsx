import { useEffect, useState } from 'react';
import api from '../../services/api';
import BossCard from '../../components/Cards/BossCard/Index';
import SearchBar from '../../components/SearchBar/Index';
import { Container, Title, Content, BossGrid } from './Bosses.styles'; 
import Header from '../../components/Header/Index';

function Bosses() {
  const [bosses, setBosses] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/bosses?limit=100')
      .then(response => setBosses(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const filteredBosses = bosses.filter((boss) =>
    boss.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Bosses</Title>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome..."
        />

        <Content>
          <BossGrid>
            {filteredBosses.map((boss) => (
              <BossCard key={boss.id} boss={boss} />
            ))}
          </BossGrid>
        </Content>
      </Container>
    </>
  );
}

export default Bosses;