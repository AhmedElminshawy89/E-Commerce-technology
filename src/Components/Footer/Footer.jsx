import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/logo.svg';
import {AiFillFacebook,AiFillGithub,AiFillLinkedin,AiFillInstagram,AiFillGoogleSquare,AiFillTwitterSquare,AiFillHome,AiFillMail,AiFillPhone} from 'react-icons/ai';
import {FaWhatsappSquare} from 'react-icons/fa';
import  './/Footer.css';
export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='f-content'>
                <div className='text'>
                 <p>Get connected with us on social networks:</p>
                </div>
                <div className='social-media'>
                    <ul>
                        <li><Link><AiFillFacebook/></Link></li>
                    </ul>
                    <ul>
                        <li><Link><AiFillTwitterSquare/></Link></li>
                    </ul>
                    <ul>
                        <li><Link><AiFillGoogleSquare/></Link></li>
                    </ul>
                    <ul>
                        <li><Link><AiFillInstagram/></Link></li>
                    </ul>
                    <ul>
                        <li><Link><AiFillLinkedin/></Link></li>
                    </ul>
                    <ul>
                        <li><Link><AiFillGithub/></Link></li>
                    </ul>
                </div>
            </div>
            <div className='sec-content'>
                <div className='container'>
                    <div className='box'>
                        <img src={Logo} alt='not found'/>
                        <div className='text'>
                            <p>The company completed a proof-of-concept demonstration of their
                            technology on a Caterpillar engine at Argonne National Laboratory.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Products</h3>
                        <div className='list text'>
                            <ul>
                            <li><Link>electronics</Link></li>
                            <li><Link>jewelery</Link></li>
                            <li><Link>men's clothing</Link></li>
                            <li><Link>women's clothing</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Link Pages</h3>
                        <div className='list text'>
                            <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/product'>Product</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='box'>
                        <h3>Contact</h3>
                        <div className='list text'>
                            <ul>
                            <li>
                                <p className='icon'><AiFillHome/></p>
                                <p className='text'>Egypt,</p>
                            </li>
                            <li>
                                <p className='icon'><AiFillMail/></p>
                                <p className='text'> info@example.com</p>
                            </li>
                            <li>
                                <p className='icon'><AiFillPhone/></p>
                                <p className='text'>01286552467</p>
                            </li>
                            <li>
                                <p className='icon'><FaWhatsappSquare/></p>
                                <p className='text'>01286552467</p>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='copy-right'>
                <p>&copy; 2023 Copyright: &#128525; </p>
            </div>
    </div>
  )
}
