import React, { useContext } from 'react'

import myContext from '../../context/data/myContext'
import Layout from '../../component/layout/Layout'
import HeroSection from '../../component/heroSection/HeroSection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCard/ProductCard'
import Testimonial from '../../component/testimonial/Testimonial'
import Track from '../../component/track/Track'
import Footer from '../../component/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'


function Home() {
 const dispatch=useDispatch();
 const cartItem=useSelector((state)=>state.cart);

 console.log(cartItem)
 const addCart=()=>{
  dispatch(addToCart("shirt"));
 }
 const deleteCart =()=>{
  dispatch(deleteFromCart("shirt"));
 }
  return (
    <Layout>
      <div className='flex gap-5 justify-center'>
       <button className="bg-gray-300" onClick={()=> addCart()}></button>
       <button className='bg-gray-300' onClick={()=> deleteCart()}></button>
      </div>
      <HeroSection/>
      <Filter/>
       <ProductCard/>
       <Track/>
       <Testimonial/>
       
    </Layout>
  )
}

export default Home
