import React, { Component } from 'react'
import './form_container.component.css'

export class FormContainerComponent extends Component {
 render() {
  return (

   <div style={this.props.style} className={`${this.props.className} form-container`}>
     {this.props.children}
   </div>
  )
 }
}

export default FormContainerComponent
