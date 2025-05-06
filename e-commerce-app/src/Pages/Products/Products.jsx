import React, { useContext } from 'react'
// import all_product from '../../Componets/Assets/all_product'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../../Componets/Breadcrums/Breadcrum';
import ProductDisplay from '../../Componets/ProductDisplay/ProductDisplay';
import DescriptionBox from '../../Componets/DescriptionBox/DescriptionBox';
import RelatedProducts from '../../Componets/RelatedProducts/RelatedProducts';

const Products = () => {
const {all_product } = useContext(ShopContext);
const {productId} = useParams();
const Product = all_product.find((e)=> e.id === Number(productId));





  return (
    <>
      <Breadcrum Product={Product}/>
      <ProductDisplay Product={Product} />
      <DescriptionBox/>
      <RelatedProducts/>
    </>
  )
}

export default Products
