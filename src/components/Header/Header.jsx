import React, { useRef, useState, useEffect } from 'react';
import './Header.css';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ backgroundImage }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const businessRef = useRef();
  const mobileBusinessRef = useRef();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    window.addEventListener('click', (e) => {
      if (
        e.target !== menuRef.current &&
        e.target !== businessRef.current &&
        e.target !== mobileBusinessRef.current
      ) {
        setOpen(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const closeMenu = () => setClick(false);

  return (
    <div
      className={color ? 'header header-bg' : 'header'}
      style={color ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      } : { background: 'transparent' }}
    >
      <div className="headerBox">
        <div className="right">
          <a href="/" className="rightImg">
            <img src="/images/logo/logo.svg" alt="Logo" />
          </a>
          <nav className="topMenu">
            <a className="topMenuItem" href="/">PRODUCT</a>
            <a className="topMenuItem" href="/">OUR MISSION</a>
            <a className="dropDown">
              <div ref={businessRef} onClick={() => setOpen(!open)}>
                FOR BUSINESS
                {!open ? (
                  <AiOutlineDown className="arrowDown" />
                ) : (
                  <AiOutlineUp className="arrowDown" />
                )}
              </div>
              {open && (
                <div ref={menuRef} className="dropDownBtn">
                  <ul>
                    <li>
                      <a href="/game" onClick={closeMenu}>Game Industry</a>
                    </li>
                    <li>
                      <a href="/nonprofit" onClick={closeMenu}>Nonprofit Companies</a>
                    </li>
                    <li>
                      <a href="/newspaper" onClick={closeMenu}>Newspaper Publishing Industry</a>
                    </li>
                    <li>
                      <a href="/mobile" onClick={closeMenu}>Mobile App Monetization</a>
                    </li>
                    <li>
                      <a href="/website" onClick={closeMenu}>Website Monetization</a>
                    </li>
                  </ul>
                </div>
              )}
            </a>
            <a className="topMenuItem" href="/blog-all">BLOG</a>
          </nav>
        </div>

        <div className="contact">
          <a href="/howitworks">
            <div className="contactButton">HOW IT WORKS</div>
          </a>
          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={30} style={{ color: '#ffffff' }} />
            ) : (
              <FaBars size={30} style={{ color: '#ffffff' }} />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <a href="/" onClick={closeMenu}>OUR MISSION</a>
            </li>
            <li className="nav-item">
              <div className="dropDown">
                <div ref={mobileBusinessRef} onClick={() => setOpen(!open)}>
                  FOR BUSINESS
                  {!open ? (
                    <AiOutlineDown className="arrowDown" />
                  ) : (
                    <AiOutlineUp className="arrowDown" />
                  )}
                </div>
                {open && (
                  <div ref={menuRef} className="dropDownBtn">
                    <ul>
                      <li>
                        <a href="/game" onClick={closeMenu}>Game Industry</a>
                      </li>
                      <li>
                        <a href="/nonprofit" onClick={closeMenu}>Nonprofit Companies</a>
                      </li>
                      <li>
                        <a href="/newspaper" onClick={closeMenu}>Newspaper Publishing Industry</a>
                      </li>
                      <li>
                        <a href="/mobile" onClick={closeMenu}>Mobile App Monetization</a>
                      </li>
                      <li>
                        <a href="/website" onClick={closeMenu}>Website Monetization</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li className="nav-item">
              <a href="/blog-all" onClick={closeMenu}>BLOG</a>
            </li>
            <li className="nav-item">
              <a href="/howitworks" onClick={closeMenu}>HOW IT WORKS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
