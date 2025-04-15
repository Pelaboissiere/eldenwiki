import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bosses from './pages/Bosses/Bosses';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header/Index';
import Home from './pages/Home/Home';
// import Itens from './pages/Itens';
// import Armas from './pages/Armas';
// import Encantamentos from './pages/Encantamentos';

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bosses" element={<Bosses />} />
        {/* <Route path="/itens" element={<Itens />} />
        <Route path="/armas" element={<Armas />} />
        <Route path="/encantamentos" element={<Encantamentos />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
