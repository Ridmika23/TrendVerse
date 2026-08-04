import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/cartSlice';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };

  return (
    <div className='product-card'>
      <Link to={`/product/${product._id}`} className='product-img-link'>
        <img src={product.image} alt={product.name} className='product-img' />
      </Link>
      <div className='product-info'>
        <Link to={`/product/${product._id}`}>
          <h3 className='product-title'>{product.name}</h3>
        </Link>
        <p className='product-brand'>{product.brand}</p>
        <div className='product-bottom'>
          <div className='product-price'>LKR {product.price.toLocaleString()}</div>
          <button 
            className='btn btn-primary add-to-cart-btn'
            onClick={addToCartHandler}
            disabled={product.countInStock === 0}
          >
            {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
