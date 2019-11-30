import React from 'react'
import Styled from 'styled-components'

const Div=Styled.div`
 display: flex;
 justify-content: space-between;
`;

function  BtnGroup(props) {
 return (
  <Div style={props.style}>
   {props.children}
  </Div>
 )
}

export default  BtnGroup
