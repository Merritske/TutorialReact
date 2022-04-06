import { Link } from "react-router-dom"
import "../styles/header.css"

export default function Header() {
    return (
        <>
            <ul className="navbar">
                <li className="navbar-item">
                    <Link to={"/"}>
                        <span> Home </span>
                    </Link>
                </li>
                <li className="navbar-item"> 
                <Link to={"/login"}>
                 <span> Login</span>   
                </Link>
                </li>
                <li className="navbar-item">
                    <Link to={"/blog"}>
                    <span>  Blog </span>  
                        </Link>
                </li>
                <li className="navbar-item">
                    <Link to={"/contact"}>
                      <span>Contact </span>  
                        </Link>
                </li>
            </ul>
        </>
    )
}