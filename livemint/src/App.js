import "./App.css";
// import Home from "./Components/Home/home";
import { SignIn } from './Components/SignIn/SignIn';
// import  Nav  from './Components/navbar2/Nav';
import { Route, Routes } from 'react-router-dom';
// import  Cart  from './Components/cart/Cart';
import  Home  from './Components/home/Home';


function App() {
  return (

    <div className='App'>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        {/* <Route path="/" element={<Nav />}></Route> */}
        {/* <Route path="/cart" element={<Cart />}></Route> */}
      </Routes> 

   
    </div>
  );
}

export default App;

