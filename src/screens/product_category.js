import React, { Component } from 'react'
import Stayled from 'styled-components'
import SectorContainer from '../components/category_container/sector_container.component'
import AreaContainer from '../components/category_container/area_container.component'
import DetailedContainer from '../components/category_container/detailed.container.component'
import {ButtonPrimary} from '../components/button/button.component'
import {companyContext} from '../context/company-context'
 

const Div=Stayled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:0px 10px
`;


 class ProductCategory extends Component {
   static contextType=companyContext
   constructor(props) {
     super(props)
   
     this.state = {
        id:'',
        detail:{}
     }

   }
   addProductBtnEvent=(e)=>{
     let layer=document.getElementsByClassName('layer')[0];
     layer.classList.add('layer-display');
   }

   changedIdEvent=(e)=>{

    console.log(e.currentTarget.id)
     this.setState({
       id:e.currentTarget.id,
       detail:this.state.detail
     });
   }


   getDetailEvent=(areaid,detail)=>{
    this.setState({
      id:this.state.id,
      detail:{id:areaid,detail:detail}
    });


    let items=document.querySelectorAll('.area-item');
    items.forEach(x=>{
       x.attributes.areaId.value===areaid?
       x.classList.add('active'):
       x.classList.remove('active');
     })
   }
   
 render() {
  return (
   <div>
       <Div>
       <h3>Mehsul Kategoriyasi</h3>
       <ButtonPrimary onClick={this.addProductBtnEvent} style={{'width':'130px','height':'35px','lineHeight':'2'}}><i class="fas fa-plus">  </i>  Elave Et</ButtonPrimary>
       </Div>
       <div className='col-12' style={{'display':'flex','justifyContent':'space-between','height':'600px'}}>
         <SectorContainer sectorClick={this.changedIdEvent} name='Sektor' />
         <AreaContainer getDetailClick={this.getDetailEvent} id={this.state.id}/>
         <DetailedContainer detail={this.state.detail}/>
       </div>
   </div>
  )
 }
}

export default ProductCategory
