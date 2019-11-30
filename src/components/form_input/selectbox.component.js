import React from 'react'
import './input.component.css'


function selectbox(props) {
  let options='';
  if(props.data!==undefined){
     options=props.data.map(obj=>{
      return <option  value={obj.name}>{obj.name}</option>
    });
  }

 return (
  <div className='form-input'>
  <label>{props.label}</label>
  <select onChange={props.onChange} name={props.name} value={props.value}>
   {options}
  </select>
</div>
 )
}

export default selectbox
