 //می خواهم کمپوننتی که لیستی از محصولات به ما نمایش بدهد
// معمولا لیست داده ها اغلب اوقات آرایه هستند 
// و زمانی که داده های ما واقعی تر هستند داخل آرایه برای هر دیتا یک آبجکتی در نظر می گیریم 

const Products = [   
{ id: 1, title: 'Book 1' },
{ id: 2, title: 'Book 2'},
{ id: 3, title: 'Book 3'}
]


const ProductList_1 = () => {

    return (
        <div>         {/*  map  آرایه لوپ کنم */}
            {Products.map( (item) => {    /* () => {} */
             
              return <p key={item.id}>{item.title}</p>

            })}   
        </div>
    )
}

export default ProductList_1