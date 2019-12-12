import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar.component'
import MainNavbar from '../main_navbar/main_navbar.component'
import './main.component.css'
import AboutCompony from '../../screens/about_compony'
import ProductCategory from '../../screens/product_category'
import ActivityInform from '../../screens/activities_inform'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class main extends Component {
   render() {
      return (
         <div className='main'>
            <Sidebar />
            <main className='main-container col-11'>
               <Router>
                  <MainNavbar />
                  <div className='main-body'>
                     <Switch>
                        <Route path='/' exact component={AboutCompony}/>
                        <Route path='/Məhsul-Kateqoriyası' component={ProductCategory}/>
                        <Route path='/Fəaliyyət-Sahələri' component={ActivityInform}/>
                     </Switch>
                  </div>
               </Router>
            </main>

         </div>
      )
   }
}

export default main

