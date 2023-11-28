import "./ErkakNamoz.scss"
import 'react-html5video/dist/styles.css'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ErkakNamoz = () => {
  return (
    <div>
        <div className='vidio'>
        <Link to="/">
            <IoClose className='closeNamesalom'/>
        </Link>
        <a href="https://www.youtube.com/watch?v=FGgnC_WkfY4&t=35s">
          <div style={{width:"150px",height:"50px",borderRadius:"15px",background:"#fff",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>Videoni ko'rish</div>
        </a>
    </div>
    </div>
  )
}

export default ErkakNamoz