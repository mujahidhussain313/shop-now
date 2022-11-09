
import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Containers/Header';
import ProductsListing from './Containers/ProductsListing';
import ProductsDetail from './Containers/ProductsDetail';

function App() {
  return (
    <div className="App">
      <Header /> 
<Routes>
<Route path='/shop-now' element={<ProductsListing />} />
<Route path='/product/:productId' element={<ProductsDetail />} />
<Route path='*' element={<h1 style={{marginTop: "50px"}}>Page Not Found</h1>} />
</Routes>
    </div>
  );
}

export default App;
