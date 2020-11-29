import React from 'react';
import s from './css/Nav.module.css';

const Nav = () => {
    return (
    <nav class={s.nav}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Messsage</a></li>
            <li><a href="#">Audio</a></li>
        </ul>
    </nav>
    );
  }
  
  export default Nav;