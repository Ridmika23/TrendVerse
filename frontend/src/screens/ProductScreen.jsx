import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';
import './ProductScreen.css';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <>
      <Link className='btn btn-secondary my-3' to='/'>
        Go Back
      </Link>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3 className='text-center' style={{ color: 'var(--color-danger)' }}>
          {error?.data?.message || error.error}
        </h3>
      ) : (
        <div className='product-details-container'>
          <div className='product-image-col'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='product-info-col'>
            <h2>{product.name}</h2>
            <div className='product-meta'>
              <span className='brand'>{product.brand}</span>
              <span className='category'>{product.category}</span>
            </div>
            <div className='price-tag'>LKR {product.price.toLocaleString()}</div>
            <p className='description'>{product.description}</p>
          </div>
          <div className='product-action-col'>
            <div className='action-card'>
              <div className='action-row'>
                <span>Price:</span>
                <strong>LKR {product.price.toLocaleString()}</strong>
              </div>
              <div className='action-row'>
                <span>Status:</span>
                <strong>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </strong>
              </div>

              {product.countInStock > 0 && (
                <div className='action-row'>
                  <span>Qty</span>
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <button
                className='btn btn-primary btn-block mt-2'
                type='button'
                disabled={product.countInStock === 0}
                onClick={addToCartHandler}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductScreen;
