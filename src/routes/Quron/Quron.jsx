import React from 'react'
import "./Quron.scss"
import QuronuKarim from "../../assets/Holy_Quran_Full.pdf"
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Quron = () => {
  return (
    <div className='quron'>
        <Link to="/">
            <IoClose className='closeNameqale'/>
        </Link>
        <iframe style={{width:"100%",height:"550px"}} src={QuronuKarim} frameborder="0"></iframe>
    </div>
  )
}

export default Quron