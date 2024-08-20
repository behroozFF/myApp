// می خواهیم محصولی را اضافه کنیم و در لیست محصولات نمایش دهیم
// اولین قدم یک کامپونت نیاز داریم بسازیم
import { useState } from 'react'
import './AddProduct.css'

  
             //prop  onAdd 
const AddProduct = ({onAdd}) => {

 // استیت اولیه ام را خالی در نظر گرفتم 
 //  title نام استیت یا آبجگت در جاوا اسگریپت  
 //  setTitle   تابعی که استیت ما یا لیست آرایه مارو آپدیت میکنه
   const [title, setTitle] = useState('') //  آگرمان این تابع بوس استیت میشه مقدار اولیه استیت ما یا لیست آبجکت ما که خالی


   const subSubmitForm = (e) => {
      e.preventDefault() // از رفرش شدن صفحه جلوگیری کن

      onAdd({title}) //  مقدار استیت بردار بریز داخلش

      setTitle('') // حالا کاربر دکمه اد رو زد مقدار از قبل گرفته و حالا خالیش کن 
   } 
       
    return(
        <div>
            <form className='add-product-form' onSubmit={subSubmitForm}>
                <div className='form-control'>
                    <input 
                    type="text" 
                    value={title} // title نام استیت ما هست
                    placeholder="Add Product"
                    // اینجا از طریق ست تایتل میاد مقدار داخل اینپوت بر میدار آپدیت میکنه در استیت تایتل
 //  از طریق ارو فانکشن ایونت به عنوان آرگمان بگیر و به کمک اون بتون خودش برسون به ولیوی که داخل اینپوت هستش 
                          //  (event) => ()  
                    onChange={ (e) => setTitle(e.target.value) }
                    //onChange در واقع دار ب اصلاح ترک میکنه  مقداری که کاربر وارد میکنه
                    />
                </div>
                <button type="submit" className='form-btn'>
                    Add
                </button>
            </form>
        </div>
    )
}


export default AddProduct