import React from 'react'
import Header from './HeaderComponents/Header'
import MainBody from './MainComponents/MainBody'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CheckoutPage from './MainComponents/CheckoutPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Header/><MainBody /></div>}/>
        <Route path='/checkout' element={<div><Header/><CheckoutPage /></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App