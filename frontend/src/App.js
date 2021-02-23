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

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } =  userSignin;
  
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">Rappa Productions</Link>
        </div>
        <div className="header-links">
          <a href="cart.ejs">Cart</a>
          {
            userInfo ? <Link to="/profile">{userInfo.name}</Link>:
            <Link to="/signin">Sign In</Link>
          }
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="/">Pants</a>
          </li>
          <li>
            <a href="/">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content" />
          <Route path="/products" exact={true} component={ProductsScreen} />
          <Route path="/shipping" exact={true} component={ShippingScreen} />
          <Route path="/payment" exact={true} component={PaymentScreen} />
          <Route path="/placeorder" exact={true} component={PlaceOrderScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id"  component={CartScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
      </main>
      <footer className="footer">
        All Rights Reserved
      </footer>
    </div>
  </BrowserRouter>
  );
}

export default App;
