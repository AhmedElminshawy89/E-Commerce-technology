import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Product from '../Product/Product';
import About from '../About/About';
import Contact from '../Contact/contact';
import Cart from '../Cart/cart';
import Favorite from '../Favorite/Favorite';
import {Zoom,Bounce,Reveal } from 'react-reveal'
import View from '../View/View';

export default function Root({StoreData ,allcategory,cart,setCart,addtocart,setFavorite,favorite,addtofavorite,filterCategory}) {
  return (
      <Fragment>
        <Routes>
            <Route path='/' element={<Home StoreData={StoreData} addtocart={addtocart} addtofavorite={addtofavorite}/>}></Route>
            <Route path='/product' element={<Product StoreData={StoreData} allcategory={allcategory} filterCategory={filterCategory} addtocart={addtocart} addtofavorite={addtofavorite}/>}></Route>
            <Route path='/about' element={<About StoreData={StoreData}/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
            <Route path='/favorite' element={<Favorite favorite={favorite} setFavorite={setFavorite} />}></Route>
            <Route path='/view/:id' element={<View addtocart={addtocart}/>}></Route>
        </Routes>
      </Fragment>
  )
}
