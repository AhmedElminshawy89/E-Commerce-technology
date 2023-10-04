import React, { Fragment, useState } from 'react'
import {BsBagCheck,BsEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {Link} from 'react-router-dom'
import '../Home/Home.css'
import '../Product/Product.css'
import { User, useAuth0 } from "@auth0/auth0-react";
export default function Product({StoreData,allcategory,addtocart,addtofavorite,filterCategory}) {

  const { loginWithRedirect ,logout,user, isAuthenticated} = useAuth0();

  const onfilter=(cat)=>{
    filterCategory(cat)
  }
  return (
    <Fragment>
      <div className='top-product'>
        <h3 className='main-title'>Products</h3>
        <div className='category'>
            <div className='content'>
              <div className='list'>
                {
                  allcategory.map((cat)=>
                    <ul><li onClick={()=>onfilter(cat)} className='active'>{cat}</li></ul>
                  )
                }
              </div>
            </div>
         </div>  
          <div className='container'>
              {
                (
                  StoreData.map((item)=>{
                    return(
                      <div className='box' key={item.id}>
                      <div className='img-box'>
                        <img src={item.image} alt='not found'/>
                        <div className='icon'>                
                          <ul>
                          {
                        isAuthenticated ?
                        <li onClick={()=>addtocart(item)}><BsBagCheck/></li>
                        :
                        <li onClick={()=>loginWithRedirect()}><BsBagCheck/></li>
                      }
                      {
                        isAuthenticated?
                      <Link to={`/view/${item.id}`}><li><BsEyeFill/></li></Link>
                        :
                      <Link onClick={()=>loginWithRedirect()}><li><BsEyeFill/></li></Link>

                      }
                      {
                        isAuthenticated?
                        <li onClick={()=>addtofavorite(item)}><AiOutlineHeart/></li>
                        :
                        <li onClick={()=>loginWithRedirect()}><AiOutlineHeart/></li>
                      }
                          </ul>
                        </div>
                      </div>
                      <div className='details'>
                        <p className='title'>{item.category}</p>
                        <p className='explain'>{item.title}</p>
                        <p className='price'>${item.price}</p>
                      </div>
                    </div>
                    )
                  })
                )
                }
          </div>   
      </div>
    </Fragment>
  )
}
