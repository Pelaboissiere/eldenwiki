import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bosses from './pages/Bosses/Index';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home/Home';
import Itens from './pages/Itens/Index';
import Weapons from './pages/Armas/Weapons';
import Enchantments from './pages/Enchantments/Index';
import Sorceries from './pages/Sorceries/Index'; 

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bosses" element={<Bosses />} />
          <Route path="/itens" element={<Itens />} />
          <Route path="/armas" element={<Weapons />} />
          <Route path="/encantamentos" element={<Enchantments />} />
          <Route path="/feitiços" element={<Sorceries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
