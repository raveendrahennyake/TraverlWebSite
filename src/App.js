
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home/Home.jsx';
import Header from './componds/common/Header/Header.jsx';
import Footer from './componds/common/footer/footer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
