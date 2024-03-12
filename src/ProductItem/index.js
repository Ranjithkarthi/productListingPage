import './index.css'


const ProductItem=(props)=>{
    const{itemDetail, getIdFunction, productId} = props
    const{id, title, description, image, name, price, rating}= itemDetail

    const onClickProduct = () => { 
        getIdFunction(id)
    }

    
    return(
        <li key={id} className="products-list" onClick={onClickProduct}>
            <div className="each-product">
                <img src={image} alt={name} />
                <p>{title}</p>
                <p>{price}</p>
                <p>{`Rating: ${rating.rate}`}</p>
            </div>
        </li>
    )
}

export default ProductItem

/* <li key={product.id} className="products-list" onClick={this.onClickProduct}>
            <div className="each-product">
                <img src={product.image} alt={product.name} />
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{`Rating: ${product.rating.rate}`}</p>
            </div>
        </li> */