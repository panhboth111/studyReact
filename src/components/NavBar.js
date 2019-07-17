import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const NavBar = ()=>{
    return(
        <nav>
            <div className="nav-wrapper black">
                <Link className="brand-logo" style={{letterSpacing:"5px"}} to="/">CodeX</Link>
                <ul className="right">
                    <li><Link className="hover:bg-white hover:text-black" to="/python">Python</Link></li>
                    <li><Link className="hover:bg-white hover:text-black" to="/javascript">JavaScript</Link></li>
                    <li><Link className="hover:bg-white hover:text-black" to="/">C++</Link></li>
                    <li><Link className="hover:bg-white hover:text-black" to="/">C#</Link></li>
                    <li><Link className="hover:bg-white hover:text-black" to="/">Java</Link></li>
                    <li><Link className="hover:bg-white hover:text-black" to="/">Kotlin</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar