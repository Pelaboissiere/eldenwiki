import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bosses from './pages/Bosses/Index';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Index';
import Home from './pages/Home/Home';
import Itens from './pages/Itens/Index';
import Weapons from './pages/Armas/Weapons';
// import Encantamentos from './pages/Encantamentos';

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
        {/* <Route path="/encantamentos" element={<Enchantments />} />  */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
