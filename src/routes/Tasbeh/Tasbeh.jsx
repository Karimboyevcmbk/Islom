import React, { useState } from 'react'
import "./Tasbeh.scss"
import { MdRestartAlt } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Tasbeh = () => {
    const [tasbeh,setTasbeh] = useState(0)
  return (
    <div className='tasbeh'>
        <Link to="/">
            <IoClose className='closeNametasbeh'/>
        </Link>
        <button className='qoshish' onClick={()=>setTasbeh(tasbeh+1)}><p>{tasbeh}</p></button>
        <button className='tozalash' onClick={()=>setTasbeh(0)}><MdRestartAlt /></button>
    </div>
  )
}

export default Tasbeh