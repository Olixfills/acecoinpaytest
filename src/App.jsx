// import { useState } from 'react'
import './App.css'
import CloseIcon from "./assets/close.svg";
import Checkout from './components/checkout/Checkout';
import Counter from './components/Counter';
import Form from './components/form/Form';
import Logo from './components/logo/Logo';

function App() {

  return (
    <div className='image-bg'>
      <div className='ace-bg'>
        <div className="close-box">
          <img src={CloseIcon} alt="" className='close-img' />
        </div>
        <div className="content-box">
          <div className="left-side">
            <div className="form-header-box">
            <Logo />
            <Counter />
            </div>
            <div className="form-div">
              <Form />
            </div>
          </div>
          <div className="right-side">
            <Checkout />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
