import React from 'react';
import './App.css';
import Header from './components/header/header.component.';
import Main from './components/main/main.component'
import PopUpForm from './components/create_product_popup/popup_form.component'
import CompanyContext from './context/company-context'

function App() {
  return (
    <div className="App">
      <CompanyContext>
      <Header/>
      <Main/>
      <PopUpForm/>
      </CompanyContext>
    </div>
  );
}

export default App;
