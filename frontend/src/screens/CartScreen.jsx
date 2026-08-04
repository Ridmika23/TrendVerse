import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { addToCart, removeFromCart } from '../slices/cartSlice';
import './CartScreen.css';

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=/shipping');
  };

  return (
    <div className='cart-container'>
      <div className='cart-items-col'>
        <h1 style={{ marginBottom: '2rem' }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go Back</Link>
          </div>
        ) : (
          <div className='cart-list'>
            {cartItems.map((item) => (
              <div className='cart-item' key={item._id}>
                <div className='cart-item-img'>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className='cart-item-name'>
                  <Link to={`/product/${item._id}`}>{item.name}</Link>
                </div>
                <div className='cart-item-price'>LKR {item.price.toLocaleString()}</div>
                <div className='cart-item-qty'>
                  <select
                    value={item.qty}
                    onChange={(e) =>
                      addToCartHandler(item, Number(e.target.value))
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='cart-item-delete'>
                  <button
                    type='button'
                    className='btn-delete'
                    onClick={() => removeFromCartHandler(item._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='cart-summary-col'>
        <div className='summary-card'>
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
          </h2>
          <div className='summary-price'>
            LKR {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toLocaleString()}
          </div>
          <button
            type='button'
            className='btn btn-primary btn-block mt-2'
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
