import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Header/Navbar';
import Homepage from './customer/Pages/Homepage/Homepage';
import Footer from './customer/components/Footer/footer.jsx';
import Product from './customer/components/Product/Product';
import Productdetails from './customer/components/ProductDetails/Productdetails';

function App() {
  return (
   <div className="">
   <Navigation/>
   <div>
  {/* <Product/> */}
  <Homepage/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
