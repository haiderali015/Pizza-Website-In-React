import React from 'react'
import Navbar from './Navbar';

const Header = () => {
  return (
    <>
    <div className='banner'>
    <Navbar/>

      <div className='banner__content'>
          <div className='container'>
    <div className='banner_text'>
    <h3>Pizza Delivery</h3>
    <h1 style={{fontFamily:'sans-serif'}}>PizzA <span style={{ color: "black" , background: 'rgb(255, 145, 39)', borderRadius:'1vw', fontFamily:'sans-serif'}}>hub</span></h1>
    <p>PizzA <span style={{ color: 'rgb(255, 145, 39)'}}>HuB</span> is most delicious pizza shop in Lahore, Pakistan. ORDER NOW from our website and get your food craving</p>
    <div className='banner-btn'>
    <a href="" className='btn btn-smart'>Delivery Now</a>
    </div>
    </div>
          </div>
      </div>    
    </div>
    </>
  )
}

export default Header