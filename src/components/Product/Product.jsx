import './Product.css';

// prop هست product
// prop هست onDelete
                //object destructuring روش
const Product = ({product, havijonDelete}) =>{
            // زمانی استفاده کنم که روی دکمه باتن کلید مشه havijonDelete  
    return(
        <div className='product'>
            <div>{product.title}</div>
            <div>
                {/* () => {} */} {/* ارو فانکشن من یک مقدار بازگشتی داشته باشه هویج آندیلیت */}           
                <button className='btn' onClick={() => {havijonDelete(product.id)}} >
                 Delete
                </button>
            </div>
            <a href="#">More</a>  
        </div>
    )
}

export default Product  


