import React from 'react'
import './main_navbar_item.component.css'
import {Link} from 'react-router-dom';

const navbarItemEvent=(e)=>{
    let items=document.querySelectorAll('.main-navbar-item');
    items.forEach(x=>{
      x===e.currentTarget.childNodes[0]?
      x.classList.add('active'):
      x.classList.remove('active');
      
    })
}

function MainNavbarItem(props) {
 return (
   <Link className='LINK' onClick={navbarItemEvent} to={props.to} >
     <li className={`main-navbar-item ${props.className}`}>{props.children}</li>
   </Link>
 )
}

export default MainNavbarItem
