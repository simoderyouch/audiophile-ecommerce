import { useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './main/pages/home';
import Headphones from './main/pages/headphones';
import Speakers from './main/pages/speakers';
import Earphones from './main/pages/earphones';
import MainNav from './main/helper/MainNav';
import Footer from './main/helper/footer';
import Checkout from './main/pages/checkout';

import DetailComponent from './main/pages/detailComponent';
import ShopCart from './main/helper/ShopCart';

import { MyContext } from "./main/Context/context";
import Protected from './main/helper/protected';





function App() {
  const { isOpen, setCheck, setFormData, setQuantity, initialState } = useContext(MyContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/checkout") {
      setCheck(false);
      setFormData(initialState)
    }
    window.scrollTo(0, 0);
    setQuantity(1)
  }, [location]);

  return (


    <>
      <MainNav />
      {
        isOpen ? <ShopCart /> : ''
      }

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />

        <Route path="/checkout" element={<Protected><Checkout /></Protected>} />

        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/headphones/:id" element={<DetailComponent />} />
        <Route path="/speakers/:id" element={<DetailComponent />} />
        <Route path="/earphones/:id" element={<DetailComponent />} />

      </Routes>

      <Footer />

    </>

  )
}

export default App;
