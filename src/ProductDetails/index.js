

const ProductDetails=(props)=>{
    const {eachItemId, tempProdList, displayProduct}=props
    
    const goHomePage =()=>{
        displayProduct(false)
    }

    console.log(tempProdList)
    let tempArray = tempProdList.filter((eachProduct) => eachProduct.id === eachItemId)
    
    return(
        <div>
            <h1>Product Details</h1>
        </div>
    )


}

export default ProductDetails