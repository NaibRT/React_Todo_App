import React,{Component} from 'react'
import MainHeaderItem from '../main_navbar_item/main_navbar_item.component'
import './main_navbar.component.css'

class MainNavbar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  

render(){
  return (
    <div className='main-navbar col-11'>
        <div className='main-navbar-title col-3'>
          <h3>Sahibkar Profili</h3>
         </div>
       <div className='col-9 main-header-navbar'>
       <ul>
       <MainHeaderItem to='/Şirkət-Məlumatlari' className='active'>Srket Melimatlari</MainHeaderItem>
       <MainHeaderItem to='/Məhsul-Kateqoriyası'>Mehsul Kategoriyasi</MainHeaderItem>
       <MainHeaderItem to='/Fəaliyyət-Sahələri'>Fealiyyet Sheleri</MainHeaderItem>
       </ul>
       </div>
  
    </div>
   )

}
}

export default MainNavbar
