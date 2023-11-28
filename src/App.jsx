import './App.scss'
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import NameofAllah from "./routes/name-of-Allah/name-of-Allah"
import { CiSettings } from "react-icons/ci";
import PaygambarimizTarixi from "./routes/PaygambarimizTarixi/PaygambarimizTarixi"
import Tasbeh from './routes/Tasbeh/Tasbeh';
import Quron from './routes/Quron/Quron';
import Hadislar from './routes/Hadislar/Hadislar';
import Tohorat from './routes/Tohorat/Tohorat';
import Namoz from './routes/Namoz/Namoz';
import ErkakNamoz from './routes/ErkakNamoz/ErkakNamoz';
import AyollarNamoz from './routes/AyolNamoz/AyolNamoz';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/name-of-Allah' element={<NameofAllah/>}/>
        <Route path='/paygambarimiztarixi' element={<PaygambarimizTarixi/>}/>
        <Route path='/tasbeh' element={<Tasbeh/>}/>
        <Route path='/quron' element={<Quron/>}/>
        <Route path='/hadislar' element={<Hadislar/>}/>
        <Route path='/tahorat' element={<Tohorat/>}/>
        <Route path='/namoz' element={<Namoz/>}/>
        <Route path='/erkaknamoz' element={<ErkakNamoz/>}/>
        <Route path='/ayolnamoz' element={<AyollarNamoz/>}/> 
      </Routes>
    </div>
  )
}

export default App
