import React, { Fragment } from 'react'
import slider_1 from '../../img/slider-img.png';
import p1 from '../../img/Mobile Phone.png';
import p2 from '../../img/headphone.png';
import p3 from '../../img/Mobile Phone.png';
import p4 from '../../img/smart watch.png';
import tp from '../../img/tp1.jpg';
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsCurrencyDollar} from 'react-icons/bs'
import {CiPercent} from 'react-icons/ci'
import {FaTruck} from 'react-icons/fa'
import {ImHeadphones} from 'react-icons/im'
import {BsBagCheck,BsEyeFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {Zoom,Bounce,Reveal } from 'react-reveal'
import { User, useAuth0 } from "@auth0/auth0-react";



import './Home.css'
export default function Home({StoreData,addtocart,addtofavorite}) {

  const { loginWithRedirect ,logout,user, isAuthenticated} = useAuth0();


  return (
    <Fragment>
      <Zoom>
        <div className='top-banner'>
          <div className='container'>
            <div className='content'>
              <h2>The Best Note Book Collection 2023</h2>
              <Link to='/product' className='link'>Shop Now <AiOutlineArrowRight/></Link>
            </div>
            <div className='img-box'>
                <img src={slider_1} alt='not found'/>
            </div>
          </div>
        </div>
      </Zoom>

        <div className='product-type'>
          <div className='container'>
            {
              StoreData.slice(10,14).map((e)=>{
                return(
                  <Bounce>
                  <div className='box' key={e.id}>
                  <div className='img-box'>
                    <img src={e.image} alt='not found'/>
                  </div>
                  <div className='content'>
                    {e.rating.count} Products
                  </div>
                </div>
                </Bounce>
                )
            })
            }
          </div>
        </div>
      <div className='about'>
        <div className='container'>
          <div className='box'>
          <Bounce>
            <div className='icon'>
              <FaTruck/>
            </div>
            <div className='content'>
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
            </Bounce>
          </div>
          <div className='box'>
          <Bounce>

            <div className='icon'>
              <BsCurrencyDollar/>
            </div>
            <div className='content'>
              <h3>Return $ Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </Bounce>

          </div>
          <div className='box'>
          <Bounce>

            <div className='icon'>
              <CiPercent/>
            </div>
            <div className='content'>
              <h3>Member Discount</h3>
              <p>On every Order</p>
            </div>
          </Bounce>

          </div>
          <div className='box'>
          <Bounce>

            <div className='icon'>
              <ImHeadphones/>
            </div>
            <div className='content'>
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </Bounce>
          </div>
        </div>
      </div>
      <div className='top-product'>
          <h3 className='main-title'>Top Product</h3>
        <div className='container'>
          {
            (
              StoreData.slice(0,8).map((item)=>{
                return(
                  <Reveal>
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
             </Reveal>
              )
            })
           )
          }
        </div>
      </div>
      <div className='bottom-banner top-banner'>
        <div className='container'>
          <div className='content'>
          {
              StoreData.slice(0,1).map((e)=>{
                return(
                  <>
                    <h2>LATEST TECHNOLOGY ADDED</h2>
                    <p className='title'>{e.title}</p>
                    <p className='price'>${e.price}</p>
                    <Link to='/product' className='link'>Shop Now <AiOutlineArrowRight/></Link>
                  </>
                )
            })
            }
          </div>
          <div className='img-box'>
              <img src={slider_1} alt='not found'/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
