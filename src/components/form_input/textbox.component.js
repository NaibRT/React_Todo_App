import React from 'react'
import Styled from 'styled-components'
import './input.component.css'

const TextArea=Styled.textarea`
    resize: none;
    outline: none;
    border-color: transparent;
`;

function Textbox(props) {
 return (
  <div className='form-input'>
  <label>{props.label}</label>
  <TextArea onChange={props.onChange} value={props.value} id={props.id} style={props.style}/>
</div>
 )
}

export default Textbox;