import './App.css';

import Navbar from './component/pages/navbar';
import Home from './component/pages/home';
import Footer from './component/pages/footer';
import ProductsPage from './component/pages/product';
import Cart from './component/pages/cart';


function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <ProductsPage/>
    {/* <Cart/> */}
    <Footer/>
  </>
  );
}

export default App;
