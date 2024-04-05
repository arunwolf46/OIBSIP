import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Registration from './Registration'
import Login from './Login';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>

      </Routes>
    </BrowserRouter>  
  )
}

export default App
