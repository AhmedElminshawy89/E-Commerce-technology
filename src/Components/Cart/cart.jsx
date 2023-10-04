import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../Cart/cart.css'
export default function Cart({cart,setCart}) {

  const inqty=(product)=>{
      const exist=cart.find((x)=>{
        return x.id === product.id;
      })
      setCart(cart.map((e)=>{
        return e.id===product.id?{...exist,qty:exist.qty + 1}:e;
      }))
  }
  const deqty=(product)=>{
    const exist=cart.find((x)=>{
      return x.id === product.id;
    })
    setCart(cart.map((e)=>{
      return e.id===product.id?{...exist,qty:exist.qty - 1}:e;
    }))
};
  const Delete=(product)=>{
    const exist=cart.find((x)=>{
      return x.id===product.id
    })
    if(exist.qty>0){
      setCart(cart.filter((P)=>{
        return P.id !== product.id;
      }))
    }
  }
  const TotalPrice = cart.reduce((price,item)=> price + item.qty * item.price,0)
  return (
    <Fragment>
      <div className='container-2'>
        {
          cart.length===0 &&
          <div className='cart-empty'>
              <h2 className='empty'>Cart is Empty</h2>
              <Link to='/product' className='link'>Shop Now</Link>
          </div>
        }

      {
        cart.map((e)=>{
          return(
          <div className='cart'>
            <div className='box' key={e.id}>
              <div className='img-box'>
                <img src={e.image} alt={e.title}/>
              </div>
              <div className='details'>
                <h4>{e.category}</h4>
                <h3>{e.title}</h3>
                <p>Price: ${e.price}</p>
                <div className='qty'>
                  <button className=' inqty' onClick={()=>inqty(e)}>+</button>
                  <input type='text' value={e.qty}/>
                  <button className=' deqty' disabled={e.qty===1} onClick={()=>deqty(e)}>-</button>
                </div>
                <h4>Sub total: ${e.price * e.qty}</h4>
                <button className='btn' onClick={()=>Delete(e)}>Delete</button>
              </div>
            </div>

          </div>
          )
        })
      }
      </div>
      {
        cart.length>0&&
        <div className='total'>
          <p>number of items: {cart.length}</p>
          <p>Total: ${TotalPrice}</p>
          <button className='btn'>CheckOut</button>
      </div>
        
      }
    </Fragment>
  )
}
