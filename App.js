import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Services from './components/Services';
import Products from './components/Home';
import Register from './components/Register';
import ProductDetails from './components/Product-details';
import ProductDescription from './components/ProductDescription';
import ProductSpecifications from './components/ProductSpecifications';
import ProductReviews from './components/ProductReviews';

import PageNotFound from'./components/Pagenotfound';
function App(){
  return (
    
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/Products' element={<Products/>}></Route>
      <Route path='/Product-detail/:Productid' element={<ProductDetails/>}>
            <Route path='Description' element={<ProductDescription/>}></Route>
            <Route path='Specifications' element={<ProductSpecifications/>}></Route>
            <Route path='Reviews' element={<ProductReviews/>}></Route>  




      </Route>

        
       
     
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      
      
      {/* <Route path='*' element={<PageNotFound/>}/> */}
      
      </Routes>
   
      <Footer/>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
