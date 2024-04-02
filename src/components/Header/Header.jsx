import React, {useRef, useState,} from "react";
import "./Header.css";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"
import {lists} from "../../businessList.js";
import {Link} from "react-router-dom";
import { AppRoutes } from "../../common/routes/AppRoutes";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = () => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef();
    const businessRef = useRef();
    const mobileBusinessRef = useRef();

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    window.addEventListener("click", (e) => {
        if (e.target !== menuRef.current && e.target !== businessRef.current && e.target !== mobileBusinessRef.current) {
            setOpen(false);
        }
    });

    const closeMenu = () => setClick(false)

    return (
        <>
        <div className={color ? 'header header-bg' : 'header'}>
                <div className='headerBox'>
                    <div className='right'>
                        <a href="/" className='rightImg'>
                            <img src="./Horizontal_container.png" alt="Logo"/>
                        </a>
                        <nav className='topMenu'>
                            {/* <a className='topMenuItem' href="/">PRODUCT</a> */}
                            {/*<a className={styles.topMenuItem}>How it Works</a>*/}
                            <a className='topMenuItem' href="/aboutus">OUR MISSION</a>
                            {/* <a className='topMenuItem'>INFLUENCER</a> */}
                            <a className='dropDown'>
                                    <div
                                        ref = {businessRef}
                                        onClick = {() => setOpen(!open)}>
                                        FOR BUSINESS

                                        {!open ? (
                                            <AiOutlineDown className='arrowDown' />
                                        ) : (
                                            <AiOutlineUp className='arrowDown' />
                                        )}

                                    </div>
                                    {open &&
                                        <div ref={menuRef} className='dropDownBtn'>
                                            <ul>
                                                <li>
                                                <a href='/game' onClick={closeMenu}>Game Industry</a>
                                                </li>
                                                <li>
                                                <a href='/nonprofit' onClick={closeMenu}>Nonprofit Companies</a>
                                                </li>
                                                <li>
                                                <a href='/newspaper' onClick={closeMenu}>Newspaper Publishing Industry</a>
                                                </li>
                                                <li>
                                                <a href='/mobile' onClick={closeMenu}>Mobile App Monetization</a>
                                                </li>
                                                <li>
                                                <a href='/website' onClick={closeMenu}>Website Monetization</a>
                                                </li>
                                            </ul>
                                        </div>
                                    }

                                </a>
                            <a className='topMenuItem' href="/blog-all">BLOG</a>

                        </nav>
                    </div>

                    <div className='contact'>
                        <a href="/howitworks">
                        <div className='contactButton'>HOW IT WORKS</div>
                        </a>
                        <div className='hamburger' onClick={handleClick}>
                            {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                                : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                        </div>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            {/* <li className='nav-item'>
                                <a href='/' onClick={closeMenu}>PRODUCT</a>
                            </li> */}
                            <li className='nav-item'>
                                <a href='/aboutus' onClick={closeMenu}>OUR MISSION</a>
                            </li>
                            {/* <li className='nav-item'>
                                <a href='#about' onClick={closeMenu}>INFLUENCER</a>
                            </li> */}
                            <li className='nav-item'>
                                {/* <a href='/howitworks' onClick={closeMenu}>FOR BUSINESS</a> */}
                                <div className='dropDown'>
                                        <div
                                            ref = {mobileBusinessRef}
                                            onClick = {() => setOpen(!open)}>
                                            FOR BUSINESS

                                            {!open ? (
                                                <AiOutlineDown className='arrowDown' />
                                            ) : (
                                                <AiOutlineUp className='arrowDown' />
                                            )}

                                        </div>
                                        {open &&
                                        <div ref={menuRef} className='dropDownBtn'>
                                        <ul>
                                            <li>
                                            <a href='/game' onClick={closeMenu}>Game Industry</a>
                                            </li>
                                            <li>
                                            <a href='/nonprofit' onClick={closeMenu}>Nonprofit Companies</a>
                                            </li>
                                            <li>
                                            <a href='/newspaper' onClick={closeMenu}>Newspaper Publishing Industry</a>
                                            </li>
                                            <li>
                                            <a href='/mobile' onClick={closeMenu}>Mobile App Monetization</a>
                                            </li>
                                            <li>
                                            <a href='/website' onClick={closeMenu}>Website Monetization</a>
                                            </li>
                                        </ul>
                                    </div>
                                        }

                                </div>
                            </li>
                            <li className='nav-item'>
                                <a href='/blog-all' onClick={closeMenu}>BLOG</a>
                            </li>
                        </ul>
                    </div>

                </div>
        </div>

                {/* Temporary solution for background opacity */}
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                </ul>
            </>
    )
}

export default Header;



