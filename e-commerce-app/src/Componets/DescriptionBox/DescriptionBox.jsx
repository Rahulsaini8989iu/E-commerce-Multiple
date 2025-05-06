import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <>
      <div className="descriptionBox">
        <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
       <div className="descriptionbox-description">
        <p>"Welcome to [SHOPPER], your one-stop destination for the latest in fashion. We offer a wide range of clothing, from trendy casual wear to elegant pieces for special occasions. Our collection is designed  to provide high-quality, comfortable, and stylish options for every season. Shop with ease and enjoy fast shipping, excellent customer service, and a seamless shopping experience. "</p>
        <p>"Welcome to [SHOPPER], where style meets comfort. Explore our wide range of fashion-forward clothing, from casual essentials to special occasion pieces. Enjoy quality, versatility, and fast shipping-all in one place!"</p>
       </div>
      </div>
    </>
  )
}

export default DescriptionBox
