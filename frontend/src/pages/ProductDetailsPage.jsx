import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import { productData } from '../static/data'
import SuggestedProducts from '../components/SuggestedProducts/SuggestedProducts'

export default function ProductDetailsPage() {
    const {name} = useParams()
    document.title = name
    const [data,setData] = useState(null)
    const productName = name.replace(/-/g, " ") 
    useEffect(()=>{
        const data = productData.find((item)=>(item.name === productName))
        setData(data)
    },[])
  return (
    <div>
        <Header activeHeading={3}/>
        <ProductDetails data = {data}/>
        {
          data&& <SuggestedProducts data={data}/>
        }
        <Footer/>
    </div>
  )
}
