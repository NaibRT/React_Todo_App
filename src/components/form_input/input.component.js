import React from 'react'
import './input.component.css'

function Input(props)  {

      return (
        <div className='form-input'>
        <label>{props.label}</label>
        <input 
          placeholder={props.placeholder}
          onChange={props.onChange} 
           style={props.style} 
           type={props.type} 
           data-date={props.data_date} 
           data-date-format={props.data_date_format} 
           name={props.name} value={props.value} 
           required pattern={props.pattern} />
        </div>
      )

 
}


export default Input
