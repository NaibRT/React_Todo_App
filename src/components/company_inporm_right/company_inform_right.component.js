import React, { Component } from 'react'
import Input from '../form_input/input.component'
import SelectBox from '../form_input/selectbox.component'
import FormContainer from '../form_container/form_container.component'
import {companyContext} from '../../context/company-context'

// <SelectBox name='rayon' label='Rayon' value={this.context.Company.district} data={this.context.districts} />


class CompanyInformRight extends Component {
    static contextType=companyContext;

  render() {
    return (
      <FormContainer className='col-8'>
        <div style={{'display':'flex','justifyContent':'space-evenly','margin':'40px 0px'}}>
        <div className='col col-6'>
          <Input onChange={this.context.onChangeHandlers.phoneOnChangeHandler} style={{'height':'45px'}} type='phone' name='phone' value={this.context.state.Company.phone} label='Telefon' />
          <Input onChange={this.context.onChangeHandlers.createdDayOnChangeHandler} style={{'height':'45px'}} type='date' name='cday' value={this.context.state.Company.createdDate} label='Yaranma İli' />
          <Input onChange={this.context.onChangeHandlers.siteOnChangeHandler} style={{'height':'50px'}} type='text' name='site' value={this.context.state.Company.site} label='İnternet Saytı' />
        </div>
        <div className='col col-6'>
          <Input onChange={this.context.onChangeHandlers.emailOnChangeHandler} style={{'height':'45px'}} type='email' name='email' value={this.context.state.Company.email} label='Email' />
          <SelectBox onChange={this.context.onChangeHandlers.cityOnChangeHandler} name='city' label='Şəhər' value={this.context.state.Company.city} data={this.context.state.cities} />
          </div>
        </div>

      </FormContainer>


    )
  }
}

export default CompanyInformRight
