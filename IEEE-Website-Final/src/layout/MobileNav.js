import React, { useEffect } from 'react';
import IEEELogo from '../img/IEEElogo.png';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    useEffect(()=>{
        window.$(document).ready(function(){
            window.$('.sidenav').sidenav();
          });
    }, [])
    return (
        <div className="hide-on-med-and-up" style={{background: "#476089"}}>
           <ul id="slide-out" className="sidenav">
                <li><Link to='/'><img style={{height: "40px", padding: "5px 5px 0 0"}} src={IEEELogo} alt="IEEE Logo" /></Link></li>
                <li><div className="divider"></div></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/blogs'>Blogs</Link></li>
                <li><Link to='/events'>Events</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/contactus'>Contact Us</Link></li>
            </ul>
            <a href="/" data-target="slide-out" className="sidenav-trigger"><img style={{height: "40px", padding: "5px"}} src={IEEELogo} alt="IEEE Logo" /></a> 
            <a href="#" style={{padding: "5px 5px 0 0"}} data-target="slide-out" className="sidenav-trigger right"><i className="material-icons">menu</i></a> 
        </div>
    )
}

export default MobileNav
