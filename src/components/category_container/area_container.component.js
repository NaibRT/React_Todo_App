import React,{Component} from 'react'
import {ContainerHeader,AreaItem}from '../category_container_item/sector_Item.component'
import {companyContext} from '../../context/company-context'

class AreaContainer extends Component {
   static contextType=companyContext;

  render() {
       let data=this.context.state.areas.filter(x=>x.secID===this.props.id);
    const items=data.map((item)=>{
       return <AreaItem getDetail={this.props.getDetailClick} key={item.id} name={item.name} areaid={item.id} detail={item.detail}/>
    });

    return (
      <div className='col-4' style={{'margin':'0px 10px'}}>
      <ContainerHeader name='Sahe'/>
      {
        items
      }
    </div>
    )
  }
}

export default AreaContainer

