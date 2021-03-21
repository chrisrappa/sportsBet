import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import { useSelector } from 'react-redux';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import ProfileScreen from './Screens/ProfileScreen';
import OrdersScreen from './Screens/OrdersScreen';
import { useState } from 'react';


function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  const [navScroll, setNavScroll] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 50){
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  }

  window.addEventListener('scroll', addShadow);

  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className={ navScroll ? "header active" : "header"}>
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Healthy Chef</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">
            <span>Cart</span>
            {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
          </Link>
          {
            userInfo ? <Link to="/profile">{userInfo.name}</Link>:
            <Link to="/signin">Sign In</Link>
          }
          { userInfo && userInfo.isAdmin && (
            <div className="dropdown">
              <a href="#">Admin</a>
              <ul className="dropdown-content">
                <li>
                  <Link to="/orders">Orders</Link>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
      <aside className="sidebar">
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul className="categories">
          <li>
            <Link to="/category/Tofu">Tofu</Link>
          </li>
          <li>
            <Link to="/category/Beef">Beef</Link>
          </li>
          <li>
            <Link to="/category/Vegetable">Vegetable</Link>
          </li>
          <li>
            <Link to="/category/Fish">Fish</Link>
          </li>
          <li>
            <Link to="/category/Chicken">Chicken</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content" />
          <Route path="/orders" exact={true} component={OrdersScreen} />
          <Route path="/products" exact={true} component={ProductsScreen} />
          <Route path="/shipping" exact={true} component={ShippingScreen} />
          <Route path="/payment" exact={true} component={PaymentScreen} />
          <Route path="/placeorder" exact={true} component={PlaceOrderScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?"  component={CartScreen} />
          <Route path="/category/:id"  component={HomeScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/profile" component={ProfileScreen} />
      </main>
      <footer className="footer">
        All Rights Reserved
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
