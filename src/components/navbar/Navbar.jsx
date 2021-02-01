import React, { Fragment, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import MdMenu from 'react-ionicons/lib/MdMenu';
import MdClose from 'react-ionicons/lib/MdClose';
import logo from '../../assets/logo_2.svg';
import rightArrow from '../../assets/right-arrow.svg';

import navbarCss from './navbar.module.css';
import indexCss from '../../assets/css/index.module.css';
import './navbarcss.css';

const Navbar = () => {
  const { navlink, nvlink } = navbarCss;
  const { nvbtn } = indexCss;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log('isOpen', isOpen);
  return (
    <Fragment>
      <nav>
        <div className="nav-brand">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="menu-icons open">
          <MdMenu onClick={toggle} fontSize="37px" color="#fafafa" style={{ cursor: 'pointer' }} />
        </div>

        <ul style={{ display: `${!isOpen && window.screen.width < 750 ? 'none' : 'flex'} `, paddingRight: '5vw' }} className={`add-menu-float nav-list ${isOpen && 'active'}`}>
          <div className="menu-icons close">
            <MdClose onClick={toggle} fontSize="35px" color="#fafafa" style={{ cursor: 'pointer' }} />
          </div>

          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>CSR Academy</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>Publications</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" activeClassName="selected" className={`${navlink} ${nvlink}`}>Media</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact" className={` ${nvbtn} btn btn-success btnNav`}> CONTACT US
            <div className="arrowParen">
                <img className="arrowLogo" src={rightArrow} alt="right-arrow" />
              </div></NavLink>

            {/* <Link exact to="/projects" className={` ${nvbtn} btn btn-success btnProjects`}> VIEW ALL PROJECTS
                        <div className="arrowParent">
                            <img className="arrowLogo" src={rightArrow} alt="right-arrow" />
                        </div>
                    </Link> */}
          </li>

        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
