import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaSun, FaMoon, FaHome } from 'react-icons/fa';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header className='header'>
      <div className='container header-container'>
        <Link to='/' className='logo'>
          TrendVerse
        </Link>
        <nav className='nav-menu'>
          <ul>
            <li>
              <Link to='/' className='nav-link'>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/cart' className='nav-link'>
                <FaShoppingCart /> Cart
                {cartItems.length > 0 && (
                  <span className='cart-badge'>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
              </Link>
            </li>
            {userInfo ? (
              <>
                <li>
                  <Link to='/profile' className='nav-link'>
                    <FaUser /> {userInfo.name}
                  </Link>
                </li>
                <li>
                  <button className='nav-link' onClick={logoutHandler}>
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to='/login' className='nav-link'>
                  <FaUser /> Sign In
                </Link>
              </li>
            )}
            <li>
              <button className='nav-link' onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '1.2rem', padding: '0.2rem' }}>
                {theme === 'light' ? <FaMoon /> : <FaSun />} 
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
