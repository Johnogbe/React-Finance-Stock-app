import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stockoverview from "./pages/Stockoverview";
import Stockdetails from "./pages/Stockdetails";
import './App.css';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stockoverview />} />
          <Route path="/detail/:symbol" element={<Stockdetails />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
   