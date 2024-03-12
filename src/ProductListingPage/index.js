import {Component} from 'react'
import ProductItem from '../ProductItem'
import ProductDetails from '../ProductDetails'
import './index.css'

class ProductListingPage extends Component {
    state = {productList:[] , prodList:[], productId:null, displayProduct: true}

    componentDidMount() {
       
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => this.setState({ productList: json }));

    }

    getIdFunction = (id) => {
        const { productList, productId} = this.state;
        this.setState({productId:id})
          const newProduct = productList.map((eachProduct)=>eachProduct.id === id);
          console.log(newProduct)
          this.setState({ prodList: [newProduct], displayProduct: false})
      };



    render(){
        const {productList, productId, displayProduct} = this.state
        let {prodList} = this.state
        
        if (productList.length > 0) {
            prodList = [...productList];
        }

        return (
            <div className="section">
              <ul className="products">
              {displayProduct ? (
    prodList.map((product) => (
        <ProductItem key={product.id} itemDetail={product} getIdFunction={this.getIdFunction} />
    ))
) : (
    <ProductDetails eachItemId={productId} tempProdList={prodList} displayProduct={displayProduct}/>
)}
{
  //   prodList.map((product) => (
  //     <ProductItem key={product.id} itemDetail={product} getIdFunction={this.getIdFunction} />
  // ))
}

       
              </ul>
            </div>
          )
        
    }
}

export default ProductListingPage