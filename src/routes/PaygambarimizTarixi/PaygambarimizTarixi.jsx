import React from 'react'
import 'react-html5video/dist/styles.css'
import "./PaygambarimizTarixi.scss"
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const PaygambarimizTarixi = () => {
  return (
    <div className='vidio'>
        <Link to="/">
            <IoClose className='closeNamesalom'/>
        </Link>
        <a href="https://www.youtube.com/watch?v=-hcat3_JSCE&t=1308s">
          <div style={{width:"150px",height:"50px",borderRadius:"15px",background:"#fff",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>Videoni ko'rish</div>
        </a>
    </div>
  )
}

export default PaygambarimizTarixi