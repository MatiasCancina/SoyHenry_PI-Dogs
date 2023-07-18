import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import NavBar from './components/NavBar/NavBar';
import CreateDog from './components/CreateDog/CreateDog';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<CreateDog />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
