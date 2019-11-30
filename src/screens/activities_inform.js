import React, { Component } from 'react'
import FormContainer from '../components/form_container/form_container.component'
import Input from '../components/form_input/input.component'
import SelectBox from '../components/form_input/selectbox.component'
import ButtonDefault, { ButtonPrimary } from '../components/button/button.component'
import BtnGroup from '../components/btn_group/btn_group.component'
import {companyContext} from '../context/company-context'

export class ActivitiesInform extends Component {

   static contextType=companyContext;
 render() {

  return (
   <div>
    <div style={{ 'padding': '0px 40px' }}>
     <h3 style={{ 'textAlign': 'left' }}>Sirket Melumatlari</h3>
    </div>
    <FormContainer clasName='col col-12'>
    
 <div style={{'display':'flex','justifyContent':'space-between'}}>
 <div className='col col-4'>
 <SelectBox onChange={this.context.onChangeHandlers.employeeCountOnChangeHandler} data={this.context.state.employeeCounts} value={this.context.state.Company.employeeCount} label='İşçi sayı' name='employeeCount' />
 <SelectBox onChange={this.context.onChangeHandlers.productOnChangeHandler} data={this.context.state.areas} value={this.context.state.Company.usedProduct} label='İstifadə etdiyi məhsul' name='usedProduct' />
 <Input onChange={this.context.onChangeHandlers.cerificateOnChangeHandler} style={{'height':'45px'}} type='text' name='certification' value='No6546551656' label='Sertifikatlar' />
</div>
<div className='col col-4'>
 <SelectBox onChange={this.context.onChangeHandlers.exportCountryOnChangeHandler} value={this.context.state.Company.exportCountry} data={this.context.state.countries} label='İxrac ölkələri' name='employeeCount' />
 <SelectBox onChange={this.context.onChangeHandlers.brancOnChangeHandler} value={this.context.state.Company.district} data={this.context.state.distrincts} label='Müştərisi oldugu Filial' name='employeeCount' />
</div>
<div className='col col-4'>
 <SelectBox onChange={this.context.onChangeHandlers.importOnChangeHandler} value={this.context.state.Company.importCountry} data={this.context.state.countries} label='İdxal Ölkələri' name='employeeCount' />
 <Input onChange={this.context.onChangeHandlers.delegateOnChangeHandler} style={{'height':'45px'}} type='text' value={this.context.state.Company.delegate} name='delegate' label='Müştəri təmsilçisi' />
</div>
 </div>
    </FormContainer>
    <div style={{'marginLeft':'40px'}}>
     <BtnGroup style={{'width':'31%','margin':'30px 0px'}}>
      <ButtonPrimary  onClick={this.context.UpdateonClickHandler} style={{ 'width': '133px', 'height': '36px', 'lineHeight': '2' }}>Yadda Saxla</ButtonPrimary>
      <ButtonDefault style={{ 'width': '133px', 'height': '36px', 'lineHeight': '2' }}>Imtina</ButtonDefault>
     </BtnGroup>
    </div>
   </div>

  )
 }
}

export default ActivitiesInform
