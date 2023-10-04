import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { Audio } from  'react-loader-spinner'
import axios from 'axios'
import '../View/View.css';


export default function View({addtocart}) {
  const [productId,setProductId]=useState([])
  const [load,setLoad]=useState(false)
  const params=useParams()

  const getId=async(id)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setProductId(response.data)  
    setLoad(true)

  }
  useEffect(()=>{
    getId();
  },[])
  return (
    <Fragment>
        {
          load?(
            <div className='view-details'>
            <div className='container'>
              <div className='img-box'>
                <img src={productId.image} alt='not found'/>
              </div>
              <div className='content'>
                <div className='details'>
                  <p className='category'>{productId.category}</p>
                  <p className='title'>{productId.title}</p>
                  <p className='description'>{productId.description}</p>
                  <p className='price'>${productId.price}</p>
                </div>
                <button className='btn' onClick={()=>addtocart(productId)}>Add To Cart</button>
              </div>
            </div>
            <div className='icon'>                
                  <Link to='/product'><li><AiOutlineClose/></li></Link>
            </div>
          </div>
          ):(
              <div className='loading'>
                  <Audio
              height = "80"
              width = "80"
              radius = "9"
              color = 'green'
              ariaLabel = 'three-dots-loading'     
              wrapperStyle
              wrapperClass
            />
              </div>
          )
        }
    </Fragment>
  )
}
