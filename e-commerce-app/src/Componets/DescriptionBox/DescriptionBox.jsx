import React, { useState } from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <>
      <div className="descriptionBox">
        <div className="descriptionbox-navigator">
          <div
            className={`descriptionbox-nav-box ${activeTab === 'description' ? 'active' : 'fade'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </div>
          <div
            className={`descriptionbox-nav-box ${activeTab === 'reviews' ? 'active' : 'fade'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (122)
          </div>
        </div>

        <div className="descriptionbox-description">
          {activeTab === 'description' ? (
            <>
              <p>
                "Welcome to <strong>SHOPPER</strong>, your one-stop destination for the latest in fashion. We offer a wide range of clothing, from trendy casual wear to elegant pieces for special occasions."
              </p>
              <p>
                "Explore our collection designed to provide high-quality, comfortable, and stylish options for every season. Enjoy fast shipping, excellent customer service, and a seamless shopping experience."
              </p>
            </>
          ) : (
            <>
              <h3>User Reviews</h3>
              <div className="review">
                <strong>Rahul Saini</strong> <span>⭐⭐⭐⭐⭐</span>
                <p>Great quality and fast delivery. Totally recommended!</p>
              </div>
              <div className="review">
                <strong>Sneha Kapoor</strong> <span>⭐⭐⭐⭐</span>
                <p>Love the design and material. Will shop again.</p>
              </div>
              <div className="review">
                <strong>Amit Verma</strong> <span>⭐⭐⭐</span>
                <p>Good value for money, but sizing was a bit off.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DescriptionBox;
