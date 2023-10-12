import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Header/Navbar';
import Homepage from './customer/Pages/Homepage/Homepage';
import Footer from './customer/components/Footer/footer.jsx';
import Product from './customer/components/Product/Product';

function App() {
  return (
   <div className="">
   <Navigation/>
   <div>
 
 <Homepage></Homepage>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
