import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Form from '../form_container/form_container.component'
import Input from '../form_input/input.component'
import SelectBox from '../form_input/selectbox.component'
import BtnDefault, { ButtonPrimary } from '../button/button.component'
import BtnGroup from '../btn_group/btn_group.component'
import Textbox from '../form_input/textbox.component'
import {companyContext} from '../../context/company-context'
import './popup_form.component.css'

class PopupForm extends Component {
 constructor(props) {
  super(props)

  this.state = {

  }
 }
 static contextType=companyContext
  
 closePopupevent=(e)=>{
  let layer=document.getElementsByClassName('layer')[0];
  layer.classList.remove('layer-display');
 }

 render() {
  return ReactDom.createPortal(

   <div className='layer'>

    <Form style={{ 'position': 'relative', 'top': '20%', 'left': '31%' }} className='col-4'>
     <div className='popup-form'>
      <div className='popup-header'>
       <h2>Məhsulları Əlavə Et</h2>
       <span onClick={this.closePopupevent}><i class="fas fa-times"></i></span>
      </div>
      <SelectBox onChange={this.context.onChangeHandlers.sectorOnChangeHandler} data={this.context.state.sectors} label="Sektor" placeholder="Sektoru Seçin" />
      <Input label="Sahə" placeholder="Sahə əlavə et" style={{ 'height': '45px' }} />
      <Textbox label="Ətrafli" style={{'width':'100%','height': '80px','border':'2px solid #c8c6c5' }} />
     </div>
     <BtnGroup style={{ 'width': '70%' }}>
      <ButtonPrimary style={{ 'width': '100px', 'height': '36px', 'lineHeight': '2' }}>Əlavə et</ButtonPrimary>
      <BtnDefault style={{ 'width': '100px', 'height': '36px', 'lineHeight': '2' }}>İmtina</BtnDefault>
     </BtnGroup>
    </Form>
   </div>
   , document.getElementById('create-product-popup-root')
  )

 }
}

export default PopupForm
