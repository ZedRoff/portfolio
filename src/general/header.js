import {React, useState} from "react"
import { Link} from "react-router-dom"
function Header() {

    const [status, setStatus] = useState(false)
console.log(window.screen.width)
    return(
        <>
        <header>
            <div className="child_header">
                <h2 className="child_header_title">
                    ZedRoff
                    </h2>
            </div>
            <ul className="child_header">
             <Link to="/">   <li className="child_header_element">Home</li></Link>
             <Link to="/projects">  <li className="child_header_element">Projects</li></Link>
             <Link to="/me">  <li className="child_header_element">Me</li></Link>
             <Link to="/links">  <li className="child_header_element">Links</li></Link>
             <Link to="/blog">  <li className="child_header_element">Blog</li></Link>
             <Link to="/contact"> <li className="child_header_element">Contact</li></Link>
            </ul>
            <i className="fas fa-bars" onClick={() => setStatus(!status)}></i>
        </header>
        {(status) ? <nav className="deployer">
        <Link to="/" className="deployer_element">   <li >Home</li></Link>
             <Link to="/projects" className="deployer_element">  <li >Projects</li></Link>
             <Link to="/me" className="deployer_element">  <li>Me</li></Link>
             <Link to="/links" className="deployer_element">  <li >Links</li></Link>
             <Link to="/blog" className="deployer_element">  <li >Blog</li></Link>
             <Link to="/contact" className="deployer_element"> <li >Contact</li></Link>
        </nav> : "" }
       
        </>
    )
}

export default Header;