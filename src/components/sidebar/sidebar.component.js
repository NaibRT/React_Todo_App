import React from 'react'
import SidebarItem from '../sidebar_item/sidebar_item.component'
import './sidebar.component.css'

function sidebar() {
 return (
  <aside className='sidebar col-1'>
      <ul>
        <SidebarItem name='Partnyorluq'><i class="far fa-handshake"></i></SidebarItem>
        <SidebarItem name='Tədbirlər'><i class="far fa-calendar-alt"></i></SidebarItem>
        <SidebarItem name='Faydalı Linklər'><i class="fas fa-network-wired"></i></SidebarItem>
        <SidebarItem name='Əlaqə'><i class="far fa-address-card"></i></SidebarItem>
        <SidebarItem name='Hesabat'><i class="fas fa-file-invoice"></i></SidebarItem>
      </ul>
  </aside>
 )
}

export default sidebar
