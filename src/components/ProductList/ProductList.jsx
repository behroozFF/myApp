// می خواهیم لیستی از محصولات نمایش یدیم

//پس یک آبجکتی از آرایه می سازیم
import Product from "../Product/Product"
import './ProductList.css'

// prop component productList هست products
// prop component ProductList هست onDelete
                     //object destructuring
const ProductList = ({products, onDelete}) => {
    return(
        <div className="product-list">
          {products.map((item) => {    
                                                     //prop ProductList onDelete
            return <Product key={item.id} product={item} havijonDelete={onDelete}/>
                                                // item فقط خود شمارندم بمون
          })}
            
        </div>
    ) 
}

export default ProductList
