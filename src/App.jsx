// State
// به کمک استیت ما می توانیم تعیین کنیم کدام قسمت از صفحه مد نظر ما هست آپدیت بشود
// برای مدیریت فرآیند های استیت در ریگت یک راه حلی به ما معرفی میکنه استفاده از /* hock useState */ هست

import { useState, useEffect } from 'react'
import Product from './components/Product/Product.jsx'
import ProductList from './components/ProductList/ProductList'
import AddProduct from './components/AddProduct/AddProduct.jsx'


const App = () => {
 //  products نام استیت یا آبجگن پر جاوا اسگریپت  
 //  setProducts   تابعی که استیت ما که لیست آرایه داخلش هست  آپدیت میکنه
 //  روش قابل درک تری array destructuring   const [] = 
  const [products, setProducts] =  useState([])

  // یوس افکت دو تا آرکومان اصلی دار اولی تابع هست و دوم آرکومان آرایه از دپندنسی های استیت هست
  useEffect(() => {
    const sendRequest =  async () => { 
      const response = await fetch('http://localhost:8000/products')  

     const responseData = await response.json()
     
     setProducts(responseData)
    }

    sendRequest()
      
  }, [])

       /* { id: 1, title: 'Book 1', age: '55'}, 
          { id: 2, title: 'Book 2', age: '55'},
          { id: 3, title: 'Book 3', age: '55'} */


   const addProduct = async (title) => {
   /*  console.log(title); */
 /*   const id = Math.floor(Math.random() * 10000)
   const newProduct = {id, ...title} */

    const response = await fetch(`http://localhost:8000/products`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(title),
    })

        // رسپانس باید اکسترکش کنیم
    const responseData = await response.json()

          //state  produts   
   //setProducts([...products, newProduct])

   setProducts([...products, responseData])
  }

  // تابع حذف محصول دلخواه
  const deleteProduct = async (id) => {
    // console.log(`Delete ${id}`);   برای نمایش آیدی محصول انتخاب شده


     await fetch(`http://localhost:8000/products/${id}`,{ method: 'DELETE'})
  

     //میر داخل لیست آرایه پروداکتس کار پیمایش انجام میده  filter
     // هرجا برابر نبود با ایدی که پاس دادیم به تابع دیلیت پروداکت
     // در نهایت ست پروداکت میاد استیت یا لیست آرایه ام آپدیت میکنه
     setProducts(products.filter((item) => item.id !== id))
  }

  return (
    <div className='container'> 
   
    {/* onAdd prop AddProduct  */}
    {/* addProduct function  in app here */}  
      <AddProduct  onAdd={addProduct}/>
    {/* prop products به کمک   */}
    {/* Products white نام استیت فعلی ما هست */}‌
    {/*  onDelete={} productList جدید prop */}
      <ProductList products={products} onDelete={deleteProduct}/>

    </div>
  )
}

export default App

