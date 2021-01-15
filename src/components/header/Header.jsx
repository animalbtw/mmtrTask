import * as React from 'react';
import st from '../styles/Header.module.css'
import {NavLink} from "react-router-dom";
import logo from './../../assets/img/smile.png'

function Header() {
    return (
        <div className={st.header}>
            <NavLink
                to='/boards'
                className={st.header__link}>
                <img
                    src={logo}
                    alt='Home'
                    className={st.header__smile}/>
            </NavLink>
        </div>
    )
}

export default Header;