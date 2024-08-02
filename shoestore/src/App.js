import About from './About';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Id from './Id';
import ProductDetails from './ProductDetails';
import ProductHome from './ProductHome';


function App() {
  const Navigate = useNavigate()
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <button>
          <Link to={"/Home"} >Home</Link>
        </button> {" "}

        <button onClick={() => {
          Navigate("/About")
        }}>About</button>

        {/* <button>
          <Link to={"/About"} >About</Link>
        </button>*/} {" "}
        <button>
          <Link to={"/Products"} >Products</Link>
        </button> {" "}
        <button>
          <Link to={"/Id"} >Id</Link>
        </button> {" "}
        <button>
          <Link to={"/Products/Mobile"} >Mobile</Link>
        </button> {" "}
        <button>
          <Link to={"/Products/Laptop"} >Laptop</Link>
        </button>
      </div>

      <Routes>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/About' element={<About />} ></Route>
        <Route path='/Products' element={<Products />} >
          <Route path='' element={<ProductHome />} ></Route>
          <Route path=':ProductId' element={<ProductDetails />} ></Route>
        </Route>
        <Route path='/Id' element={<Id />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
