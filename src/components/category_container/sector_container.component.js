import React,{Component} from 'react'
import SectorItem, { ContainerHeader } from '../category_container_item/sector_Item.component'
import {companyContext} from '../../context/company-context'

class CategoryContainer extends Component {
  static contextType=companyContext

  state = { activeIndex: null };
  componentDidMount() {
    const sectorContainers = Array.from(document.querySelectorAll('.sector-item'));
    sectorContainers.forEach(container => {
      container.addEventListener('click', (e) => {
        const currentIndex = sectorContainers.indexOf(e.currentTarget);
        this.setState({ activeIndex: currentIndex });
      });
    })
  }


  
  render() {
    console.log(this.context.state.Company)
    let items = this.context.state.sectors.map((item, index) => {
      return <SectorItem  onClick={this.props.sectorClick} key={index} isActive={index === this.state.activeIndex} className='sectorItem' name={item.name} id={item.id} />
    })
    return (
      <div className='col-4' style={{ 'margin': '0px 10px' }}>
        <ContainerHeader name={this.props.name} />
        {items}
      </div>
    )
  }
}

export default CategoryContainer

