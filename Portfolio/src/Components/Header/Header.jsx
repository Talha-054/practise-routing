import React, {useRef} from 'react';
import "./header.css";
import { NavLink } from 'react-router-dom';

function Header() {



    return (
        <>
            <div className="header-container">
                <div className="header">
                    <div className="options">
                        <ul>

                            <NavLink to={"/analog"} className={({isActive})=>`navlink ${isActive? "red":""}`}><li>Analog</li></NavLink>

                            <NavLink to={"/custom"}  className={({isActive})=>`navlink ${isActive? "red":""}`}><li>Customization</li></NavLink>
                        
                        
                            <NavLink to={"/digital"}  className={({isActive})=>`navlink ${isActive? "red":""}`}><li>Digital</li></NavLink>

                            <NavLink to={"/projects"}  className={({isActive})=>`navlink ${isActive? "red":""}`}> <li >JS Projects</li> </NavLink>

                        </ul>
                    </div>
                    <div className="member">

                        <div className="light"></div>

                        <NavLink to={"/login"}>
                            <button className='login-button'>Login</button>
                        </NavLink>
                        <NavLink to={"/Sign-up"}>
                            <button className='sign-button'>Sign Up</button>
                        </NavLink>
                       
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header;
