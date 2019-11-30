import React,{Component} from 'react'
import Input  from '../form_input/input.component'
import './company_inform_left.component.css'
import {companyContext} from '../../context/company-context'

class companyinformLeft extends Component {
    static contextType=companyContext;
 nameOnChange=(e)=>{
   console.log(e.currentTarget.value)
   
 }

render(){
 return (
  <div className='col-4'>
  <div className='inform-left col-12'>
  <div className='company-logo'><i className="fas fa-book-open"></i></div>
  <h2>Pronet MMC</h2>
  <Input  onChange={this.context.onChangeHandlers.directorOnChangeHandler} style={{'height':'45px'}} type='text' name='name' value={this.context.state.Company.director} label='Direktor'/>
  <Input  onChange={this.context.onChangeHandlers.bdayOnChangeHandler} style={{'height':'45px'}} data_date="" data_date_format="DD.MMMM.YYYY" type='date' name='bday' value={this.context.state.Company.birthDay} label='Direktor Dogum Trixi'/>
  <Input  onChange={this.context.onChangeHandlers.voenOnChangeHandler} style={{'height':'45px'}} type='text' name='voen' value={this.context.state.Company.voen} label='Voen'/>

  </div>
  </div>
 )
}

}

export default companyinformLeft
