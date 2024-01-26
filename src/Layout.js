import React from 'react';
import {Link,Outlet} from "react-router-dom"
import "./css/Layout.css"

export default function Header() {
return (
    <div>
    
      <nav>
        <ul className='one'>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="about">ABOUT</Link>
            </li>
            <li>
                <Link to="contact">CONTACT</Link>
            </li>
            <li>
                <Link to="count">COUNT</Link>
            </li>
        </ul>
      </nav>
        <Outlet/>
    </div>
  );
};
