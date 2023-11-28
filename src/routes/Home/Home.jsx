import React from 'react'
import "./Home.scss"
import MuslimPrayer from "../../assets/muslimPrayer.svg"
import Quran from "../../assets/Quran.png"
import islamicImg from "../../assets/islamicImg.svg"
import Tasbeh from "../../assets/tasbeh.png"
import Tahorat from "../../assets/tahorat.png"
import Imam from "../../assets/imam.png"
import Muhammad from "../../assets/Muhammad(S.A.V).avif"
import Allah from "../../assets/Allah.webp"
import book from "../../assets/book.webp"
import news from "../../assets/news.svg"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='Home'>
        <div className='Home-wrapper'>
            <Link to="/name-of-Allah">
                <div className='namoz'>
                    <img src={Allah} alt="" />
                    <p className='namoz_Text'>Allahning 99ta ismlari</p>
                </div>
            </Link>
            <Link to="/paygambarimiztarixi">
                <div className='namoz'>
                    <img src={Muhammad} alt="" />
                    <p className='namoz_Text'>Payg'ambarimiz tarixi</p>
                </div>
            </Link>
            <Link to='/tahorat'>
                <div className='namoz'>
                    <img src={Tahorat} alt="" />
                    <p className='namoz_Text'>Tahorat olish</p>
                </div>
            </Link>
            <Link to='/namoz'>
                <div className='namoz'>
                    <img src={MuslimPrayer} alt="" />
                    <p className='namoz_Text'>Namoz o'qishni o'rganish</p>
                </div>    
            </Link>
            <Link to="/quron">
                <div className='namoz'>
                    <img src={Quran} alt="" />
                    <p className='namoz_Text Quron_Text'>Quroni Karim</p>
                </div>
            </Link>
            <Link to='/tasbeh'>
                <div className='namoz'>
                    <img src={Tasbeh} alt="" />
                    <p className='namoz_Text'>Tasbeh</p>
                </div>
            </Link>
            <Link to='/hadislar'>
                <div className='namoz'>
                    <img src={book} alt="" />
                    <p className='namoz_Text'>Hadislar</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Home