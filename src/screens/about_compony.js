import React, { Component } from 'react'
import InformLeft from '../components/company_inform_left/company_inform_Left.component'
import InformRight from '../components/company_inporm_right/company_inform_right.component'
import ButtonDefault, { ButtonPrimary } from '../components/button/button.component'
import BtnGroup from '../components/btn_group/btn_group.component'
import {companyContext} from '../context/company-context'



class AboutCompony extends Component {
  static contextType=companyContext;

   render() {
      return (
            <div>
               <div>
                  <h3 style={{ 'textAlign': 'left' }}>Sirket Melumatlari</h3>
               </div>
               <div className='col-12'>
                  <div style={{ 'display': 'flex', 'height': '530px' }}>
                     <InformLeft />
                     <InformRight />
                  </div>
                  <BtnGroup style={{ 'width': '31%', 'margin': '30px 0px' }}>
                     <ButtonPrimary onClick={this.context.UpdateonClickHandler} style={{ 'width': '133px', 'height': '36px', 'lineHeight': '2' }}>Yadda Saxla</ButtonPrimary>
                     <ButtonDefault style={{ 'width': '133px', 'height': '36px', 'lineHeight': '2' }}>Imtina</ButtonDefault>
                  </BtnGroup>
               </div>
            </div>
      )
   }
}

export default AboutCompony
