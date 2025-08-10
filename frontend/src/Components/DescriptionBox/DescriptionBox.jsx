import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that allows businesses to sell products or services
             directly to consumers over the internet.It includes features like product listings, shopping 
             carts, secure payment options, and order tracking, providing a convenient, 24/7 shopping 
            experience that can be accessed globally via computers and mobile devices.</p>
            <p>
            E-commerce websites enable users to browse, compare, and purchase products with 
            ease. They often offer personalized recommendations, user accounts, and various
            payment methods, simplifying online shopping and expanding business reach significantly.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
