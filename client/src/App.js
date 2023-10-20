import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Header/Navbar';
import Homepage from './customer/Pages/Homepage/Homepage';
import Footer from './customer/components/Footer/footer.jsx';
import Product from './customer/components/Product/Product';
import Productdetails from './customer/components/ProductDetails/Productdetails';
import Cart from './customer/components/Cart/Cart';
import CartItem from './customer/components/Cart/cartitem';
import Checkout from './customer/components/Checkout/Checkout';
function App() {
  return (
   <div className="">
   <Navigation/>
   <div>
  {/* <Product/> */}
  {/* <Productdetails/> */}
   {/* <Cart/> */}
   {/* <CartItem/> */}
   <Checkout/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
