import React,{Component} from 'react'
import Styled from 'styled-components'
import {ContainerHeader} from '../category_container_item/sector_Item.component'
import ButtonDefault,{ButtonDanger} from '../button/button.component'
import {companyContext} from '../../context/company-context'

const P=Styled.p`
    padding-top: 0px;
    height: 100%;
    text-align: left;
    word-break: break-word;
    overflow-y: scroll;
`;

const Div=Styled.div`
  height:297px;
  background-color:white;
  padding:22px 20px;
  border-radius:5px;
  display:flex;
  flex-direction:column;
`;

class Detailed extends Component {
  static contextType=companyContext;

  render(){
 return (
  <div className='col-4' style={{'margin':'0px 10px'}}>
  <ContainerHeader name='Ətrafli'/>
  <Div>
  <P>
   {
     this.props.detail.detail
   }
  </P>
  <div style={{'width':'200px'}}>
  <ButtonDanger onClick={this.context.removeDetail} id={this.props.detail.id} style={{'width':'60px','lineHeight':'1','display':'inline-block','marginRight':'10px'}}> Sil <i class="fas fa-trash"></i></ButtonDanger>
  <ButtonDefault style={{'width':'60px','lineHeight':'1','display':'inline-block'}}> Dəyiş <i class="fas fa-pen"></i></ButtonDefault>
  </div>
  </Div>
  </div>
 )
  }
}

export default Detailed
