
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home/Home.jsx';
import Header from './componds/common/Header/Header.jsx';
import Footer from './componds/common/footer/footer.jsx'; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
