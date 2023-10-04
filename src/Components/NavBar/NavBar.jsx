import React, { Fragment, useState } from 'react';
import {FaTruckMoving} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBagCheck} from 'react-icons/bs';
import {CiLogin} from 'react-icons/ci'
import {CiLogout} from 'react-icons/ci'
import img from '../../img/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { User, useAuth0 } from "@auth0/auth0-react";
import {AiFillHome,AiFillContacts} from 'react-icons/ai';
import {FaProductHunt} from 'react-icons/fa';
import {FcAbout} from 'react-icons/fc';
import './NavBar.css'
const NavBar = ({StoreData,cart,favorite,filterSearch}) => {
    const { loginWithRedirect ,logout,user, isAuthenticated} = useAuth0();
    


    const onSearch=(word)=>{
        filterSearch(word);
    }

  return (
    <Fragment>
        <div className='f-header'>
            <div className='f-content'>
                    <div className='icon'>
                        <FaTruckMoving/>
                    </div>
                <p className='title'>
                    Free Shiping when shopping upto $1000
                </p>
            </div>
        </div>  
        <div className='main-header'>
          <div className='container'>
            <div className='logo'>
                    <img src={img}></img>
                </div>
                <div className='search-box'>
                    <input className='search-input' onChange={(e)=>onSearch(e.target.value)} type='text'  placeholder='Search Your Product... '  />
                </div>
                <div className='icon'>
                {   
                isAuthenticated &&(
                        <div className='acount'>
                            <div className='user-icon'>
                                <AiOutlineUser/>
                            </div>
                            <p>Hello, {user.name}</p>
                        </div>
                )}
 
                    <div className='second-icon'>
                        <Link to="/favorite" className='link'>
                            <p><AiOutlineHeart/></p>
                            {
                                favorite.length===0?
                                <span></span>
                                :
                                <span className='num-items-cart'>{favorite.length}</span>
                            }
                            
                            </Link>
                        <Link to="/cart" className='link'>
                            <p><BsBagCheck/></p>
                            {
                                cart.length===0?
                                <span></span>
                                :
                                <span className='num-items-cart'>{cart.length}</span>
                            }
                            
                            </Link>
                    </div>
                </div>
          </div>
        </div>
        <div className='header'>
            <div className='container'>
               <div className='nav'>
                     <ul>
                        <li>
                            <NavLink className=' link ' to='/'>
                                <p className='icon'><AiFillHome/></p>
                                <p className='name'>Home</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/product'>
                                <p className='icon'><FaProductHunt/></p>
                                <p className='name'>Product</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/about'>
                                <p className='icon'><FcAbout/></p>
                                <p className='name'>About</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='/contact'>
                                <p className='icon'><AiFillContacts/></p>
                                <p className='name'>Contact</p>
                            </NavLink>
                        </li>
                    </ul>
               </div>
                <div className='auth'>
                    {
                    isAuthenticated ?
                    (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>)
                    :
                    (<button onClick={()=>loginWithRedirect()}><CiLogin/></button>)
                    }
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default NavBar