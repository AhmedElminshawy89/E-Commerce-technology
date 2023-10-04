import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import '../Cart/cart.css'

export default function Favorite({favorite,setFavorite}) {

  const Delete=((e)=>{
    const exist=favorite.find((i)=>{
      return i.id===e.id;
    })
    if(exist){
      setFavorite(favorite.filter((f)=>{
        return f.id !==e.id
      }))
    }
  })
  const TotalPrice=favorite.reduce((price,item)=>price + item.price,0)
  return (
    <Fragment>
    <div className='container-2'>
      {
        favorite.length===0 &&
        <div className='cart-empty'>
            <h2 className='empty'>favorite is Empty</h2>
            <Link to='/product' className='link'>Shop Now</Link>
        </div>
      }

    {
      favorite.map((e)=>{
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
              <button className='btn' onClick={()=>Delete(e)}>Delete</button>
            </div>
          </div>

        </div>
        )
      })
    }
    </div>
    {
      favorite.length>0&&
      <div className='total'>
        <p>number of items: {favorite.length}</p>
        <p>Total:${TotalPrice}</p>
    </div>
      
    }
  </Fragment>

  )
}
