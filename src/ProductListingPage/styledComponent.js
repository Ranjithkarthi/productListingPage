import './App.css';
import styled from 'styled-components';

const products = [
  { id: 1, name: 'Product A', image: 'http://via.placeholder.com/200x200' },
  { id: 2, name: 'Product B', image: 'http://via.placeholder.com/200x200' },
  { id: 3, name: 'Product c', image: 'http://via.placeholder.com/200x200' },
  { id: 4, name: 'Product d', image: 'http://via.placeholder.com/200x200' },
  { id: 5, name: 'Product e', image: 'http://via.placeholder.com/200x200' },
  { id: 6, name: 'Product f', image: 'http://via.placeholder.com/200x200' },
  { id: 7, name: 'Product g', image: 'http://via.placeholder.com/200x200' },
  { id: 8, name: 'Product h', image: 'http://via.placeholder.com/200x200' },
  { id: 9, name: 'Product i', image: 'http://via.placeholder.com/200x200' },
  { id: 10, name: 'Product j', image: 'http://via.placeholder.com/200x200' },
  { id: 11, name: 'Product k', image: 'http://via.placeholder.com/200x200' },
  // Add more products here...
];

const ProductCard = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
  <div className="section">
     <ul className="products">
      {products.map((product) => (
        <li key={product.id} className="products-list">
          <ProductCard>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {/* Add other product details */}
          </ProductCard>
        </li>
      ))}
   </ul>
  </div>
  );
}

export default App;