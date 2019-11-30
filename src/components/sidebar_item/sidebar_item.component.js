import React from 'react'
import './sidebar_item.component.css'
function SidebarItem(props) {
 return (
  <li className='sidebar_item'>
     <div>
     {props.children}
     </div>
     <span>{props.name}</span>
  </li>
 )
}

export default SidebarItem
