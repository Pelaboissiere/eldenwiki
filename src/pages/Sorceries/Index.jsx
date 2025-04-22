import { useEffect, useState } from 'react';
import api from '../../services/api';
import SorceryCard from '../../components/Cards/SorceryCard/Index';
import SearchBar from '../../components/SearchBar/Index';
import { Container, Title, Content, SorceryGrid } from './Sorceries.styles';
import Header from '../../components/Header/Index';

function Sorceries() {
  const [sorceries, setSorceries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/sorceries?limit=120')
      .then(response => setSorceries(response.data.data))
      .catch(error => console.error(error));
  }, []);

  const filteredSorceries = sorceries.filter((sorcery) =>
    sorcery.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container>
        <Title>Feitiços</Title>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome..."
        />

        <Content>
          <SorceryGrid>
            {filteredSorceries.map((sorcery) => (
              <SorceryCard key={sorcery.id} sorcery={sorcery} />
            ))}
          </SorceryGrid>
        </Content>
      </Container>
    </>
  );
}

export default Sorceries;
