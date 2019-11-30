import React from 'react'
import './category_container_item.component.css'



function SectorItem(props) {
   return (
      <div onClick={props.onClick} id={props.id} className={`container-item sector-item ${props.isActive ? 'active' : ''}`}>
         <div className='item-icon'>
            <i class="fas fa-concierge-bell"></i>
         </div>
         <h4>{props.name}</h4>
         <div className='item-count'>5</div>
      </div>

   )
}


function ContainerHeader(props) {
   return (
      <div className='container-item container-item-header'>
         <h4>{props.name}</h4>
      </div>
   )
}


function AreaItem(props) {
   return (
      <div  onClick={()=>props.getDetail(props.areaid,props.detail)} areaid={props.areaid} className='container-item area-item'>
         <h4>{props.name}</h4>
      </div>
   )
}




export { ContainerHeader, AreaItem }
export default SectorItem
