import React, { Component } from 'react'
import '../../responsive.css'
import './header.component.css'
class header extends Component {
  render() {
    const month = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentiyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    const weekday = ['Bazarertəsi', 'çərşəmbəaxşamı', 'Çərşəmbə', 'Cüməaxşamı', 'Cümə', 'Şəmbə', 'Bazar']
    const date = new Date()
    const today = {
      day: date.getDate(),
      month: month[date.getMonth()],
      year: date.getFullYear(),
      wikname: weekday[date.getDay()]
    }
    return (
      <header className='container col-12'>
        <div className='logo col-1'>
          <img src={require('../../star4.png')} alt='' width='100%' height='90px' />
        </div>
        <div className='header col-11'>
          <div className='date-time'>
            <div>
              Bugün,{`${today.day} ${today.month} ${today.year}`}
              <span>{today.wikname}</span>
            </div>
          </div>
          <div className='h-right'>
            <div className='bell'>
              <i class="far fa-bell"></i>
              <span>2</span>
            </div>
            <div className='company-name'>Company name</div>
            <div className='img'><img src='' alt='' /></div>
          </div>
        </div>
      </header>


    )
  }
}

export default header
