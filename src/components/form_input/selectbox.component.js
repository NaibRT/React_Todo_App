import React from 'react'
import './input.component.css'


function selectbox(props) {
  let options='';
  if(props.data!==undefined){
     options=props.data.map((obj,index)=>{
      return <option key={index} id={obj.id}  value={obj.name}>{obj.name}</option>
    });
  }

 return (
  <div className='form-input'>
  <label>{props.label}</label>
  <select placeholder={props.placeholder} onChange={props.onChange} name={props.name} value={props.value} id='' >
   {options}
  </select>
</div>
 )
}

export default selectbox
