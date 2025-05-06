import React, { useContext, useEffect } from 'react';
import './ShopCategary.css';
import { ShopContext } from '../../Context/ShopContext.jsx';
import dropdown_icon from '../../Componets/Assets/dropdown_icon.png';
import Item from '../../Componets/Item/ItemFile';

const ShopCategary = (props) => {
  const { all_product } = useContext(ShopContext);



  useEffect(() => {
    // Use this hook if you need to perform any side-effects or log values
  }, [all_product, props.category]);

  return (
    <div className="shop-category">
      <img className='shopcategory-banner' src={props.banner || ''} alt="Banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of {all_product?.length || 0} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.length > 0 ? (
          <>
          { all_product.filter((item) => {
          return item.category === props.category
          }
          ).map((item , i)=>(
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
          </>
        ):(
          <>
          </>
        )}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategary;



