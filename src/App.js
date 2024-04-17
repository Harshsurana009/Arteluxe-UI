// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import magnet_banner from './Components/Assets/p2.png';
import gift_item_banner from './Components/Assets/p4.png';
import chocolate_banner from './Components/Assets/p3.png';
import personalised_banner from './Components/Assets/p1.png';
import Order from './Pages/Order';

function App() {
  return (
    <div className="App">
      {
        <div>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Shop/>}/>
              <Route path='/magnets' element={<ShopCategory banner={magnet_banner} category="magnet"/>}/>
              <Route path='/gift_items' element={<ShopCategory banner={gift_item_banner} category="gift_item"/>}/>
              <Route path='/chocolates' element={<ShopCategory banner={chocolate_banner} category="chocolate"/>}/>
              <Route path='/personalised_items' element={<ShopCategory banner={personalised_banner} category="personalised_item"/>}/>
              <Route path="/product" element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
              </Route>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={<LoginSignup/>}/>
              <Route path="/order/:order_ref" element={<Order/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
      }
    </div>
  );
}

export default App;
