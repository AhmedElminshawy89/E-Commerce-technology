import React, { Fragment, useState } from 'react';
import '../Contact/contact.css';
import {FaLocationDot} from 'react-icons/fa6';
import {IoCallOutline} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import { User, useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';


export default function Contact() {
  
  const notifySuccess = () =>    

  toast('The message has been sent successfully', {
    type:"success",
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  }
  );
  const notifyWarning = () =>    

  toast('There is an error in the connection, please check', {
    type:"warning",
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  }
  );
  const { loginWithRedirect ,logout,user, isAuthenticated} = useAuth0();

  const[formValue,setFormValue]=useState({FirstName:'',LastName:'',Email:'',Phone:'',Message:''});

  const data=(e)=>{
    const {name,value}=e.target;
    setFormValue({...formValue,[name]:value})
  }

  const senddata=async(e)=>{
    const{FirstName,LastName,Email,Phone,Message}=formValue;
    e.preventDefault();
    const options={
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        FirstName,LastName,Email,Phone,Message
      })
    }
    const res=await fetch('https://e-commerce-bbf85-default-rtdb.firebaseio.com/Message.json',options)
    if(res){
      notifySuccess();
    }else{
      notifyWarning();
    }
  } 
  return (
      <Fragment>
        <div className="contact">
            <div className='content'>
              <div className='details'>
               <h3>Contact Us</h3>
                <div className='info'>
                  <div className='de'>
                    <p className='icon'><FaLocationDot/></p>
                    <p className='text'>Egypt,Kafr Elshiekh</p>
                  </div>
                  <div className='de'>
                    <p className='icon'><IoCallOutline/></p>
                    <p className='text'>01286552467</p>
                  </div>
                  <div className='de'>
                    <p className='icon'><GrMail/></p>
                    <p className='text'>mail@ex.com</p>
                  </div>
                </div>
              </div>
              <form method='POST' className='form' >
               <h3>Get in touch</h3>
                <div className='inputs'>
                    <div className='name'>
                      <input className='input' name='FirstName'   type='text' value={formValue.FirstName}  onChange={data}  placeholder='First Name'/>
                      <input className='input' name='LastName'  type='text' value={formValue.LastName} autoComplete='off' onChange={data}  placeholder='Last Name'/>
                  </div>
                  <div className='remain-form'>
                      <input className='input' name='Email'  type='email' value={formValue.Email} autoComplete='off' onChange={data} placeholder='Email Address'/>
                      <input className='input' name='Phone'  type='number' autoComplete='off' value={formValue.Phone} onChange={data} placeholder='Phone Number'/>
                      <textarea className='input' name='Message'  type='text' autoComplete='off' value={formValue.Message} onChange={data}  placeholder='Message'/>
                  </div>
                </div>
                {
                  isAuthenticated ?
                  <button className='btn' disabled={formValue.FirstName===''||formValue.LastName===''||
                formValue.Email===''||formValue.Phone===''} onClick={senddata}>Submit</button>
                  :
                  <button className='btn' onClick={()=>loginWithRedirect()}>Login</button>
                }
            </form>
            </div>
        </div>
      </Fragment>
  )
}
