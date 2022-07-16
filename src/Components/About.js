import React from 'react'

const About = () => {
  return (
    <>
    <div className='about'>
    <div className='container'>
        <div className='row'>
        <div className='col-6 p-25'>
            <h3>About Us</h3>
            <h1>Welcome to Pizza HuB</h1>
            <p>PizzA <span style={{ color: 'rgb(255, 145, 39)'}}>HuB</span> is most delicious pizza shop in Lahore, Pakistan. ORDER NOW from our website and get your food craving</p>
            <div className='banner-btn'>
            <a href="" className='btn btn-smart'>Read More</a>
            </div>
        </div>

            <div className='col-6'>
            <div className='about_img'>
                <img src='/images/aboutpic.jpg' alt='pizza'/>
            </div>

            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default About