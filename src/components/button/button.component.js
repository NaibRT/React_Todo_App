import React from 'react'
import './button.component.css'

function ButtonDefault(props) {
 return (
  <div onClick={props.onClick} className={`btn btn-default ${props.className}`} style={props.style}>
     {props.children}
  </div>
 )
}

function ButtonPrimary(props) {
   return (
    <div onClick={props.onClick} className={`btn btn-primary ${props.className}`} style={props.style}>
       {props.children}
    </div>
   )
  }

  function ButtonDanger(props) {
   return (
    <div onClick={props.onClick} id={props.id} className={`btn btn-danger ${props.className}`} style={props.style}>
       {props.children}
    </div>
   )
  }

export {ButtonPrimary,ButtonDanger}

export default ButtonDefault
