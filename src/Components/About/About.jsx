import React, { Fragment } from 'react'
import '../About/About.css'
import p1 from '../../img/tp1.jpg'
export default function About({StoreData}) {
  return (
    <Fragment>
      <div className='about top-product'>
          <h3 className='main-title'>About Us</h3>
          <div className='containerr'>
            <div className='info'>
              <p>In a way, its About Us page is more of an “about the customer” page that allows shoppers to explore and
                 connect through its video, before bringing it back to its promise as a company.
                It’s a departure from copy-driven pages, but it 
                works in the favor of WP Standard as a brand of few words, or for brands that want to say a lot by saying very little.</p>
            </div>
            <div className='images-box'>
              {
                StoreData.slice(2,3).map((i)=>{
                 return(
                  <img src={p1} alt={i.title}/>
                 )
                })
              }
            </div>
          </div>
      </div>
    </Fragment>  )
}
