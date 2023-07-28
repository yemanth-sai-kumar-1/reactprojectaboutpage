
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import P1 from './pages/P1';
import P2 from './pages/P2';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<P1/>} />
        <Route path='/p2' element={<P2/>} />
      </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
