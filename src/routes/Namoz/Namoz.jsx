import "./Namoz.scss"
import { IoManSharp } from "react-icons/io5";
import { IoWoman } from "react-icons/io5";
import { Link } from "react-router-dom";

const Namoz = () => {
  return (
    <div className="namoz">
        <Link to="/erkaknamoz"><div className="erkak"><IoManSharp/>Erkaklar uchun</div></Link>
        <Link to="/ayolnamoz"><div className="ayol"><IoWoman/>Ayollar uchun</div></Link>
    </div>
  )
}

export default Namoz