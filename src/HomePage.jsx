import React from 'react';

const products = [
  { id: 1, name: 'Calvin', price: 100, image: 'https://via.placeholder.com/150' }, 
  { id: 2, name: 'Eva', price: 150, image: 'https://via.placeholder.com/150' },       
  { id: 3, name: 'Perfume', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sprinkle', price: 250, image: 'https://via.placeholder.com/150' },
];

function HomePage({ addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
