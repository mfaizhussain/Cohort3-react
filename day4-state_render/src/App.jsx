import React, { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard.jsx'

const App = () => {

  const [productData, setProductData] = useState([
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    description: "Ergonomic wireless mouse with adjustable DPI."
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    description: "Over-ear headphones with noise cancellation."
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    price: 3499,
    description: "Lightweight running shoes for daily workouts."
  },
  {
    id: 4,
    name: "Backpack",
    category: "Accessories",
    price: 1299,
    description: "Water-resistant backpack with multiple compartments."
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    price: 4999,
    description: "Fitness tracker with heart rate monitoring."
  },
  {
    id: 6,
    name: "Coffee Mug",
    category: "Home & Kitchen",
    price: 399,
    description: "Ceramic coffee mug with 350ml capacity."
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 2999,
    description: "RGB mechanical keyboard with blue switches."
  },
  {
    id: 8,
    name: "Water Bottle",
    category: "Fitness",
    price: 599,
    description: "Stainless steel insulated water bottle."
  },
  {
    id: 9,
    name: "Notebook",
    category: "Stationery",
    price: 199,
    description: "A5 ruled notebook with 200 pages."
  },
  {
    id: 10,
    name: "Desk Lamp",
    category: "Home & Office",
    price: 1599,
    description: "LED desk lamp with adjustable brightness levels."
  }
])

 

const deleteProduct = (id) => {
  
  // let products = productData.filter((ele) => ele.name !== name)
  console.log("delete", products);
  setProductData((prev) => prev.filter((ele) => ele.id !== id))
  
}
  console.log("App");
  
  return (
    <div>
      <h1>Hey data not rendering..</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
             {
              productData.map((elem) =>{
                return <ProductCard key={elem.id} product={elem} del={deleteProduct}/>
              })
             }
      </div>
      
    </div>
  )
}

export default App
