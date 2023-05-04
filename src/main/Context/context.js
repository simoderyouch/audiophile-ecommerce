import { createContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { React } from "react";
import dataJson from './data.json';


export const MyContext = createContext("");





function Context(props) {
  const [quantity, setQuantity] = useState(1);

  const [cart, setCart] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [amout, setAmout] = useState({})
  const [headphonesProduct, setHeadphonesProduct] = useState([]);
  const [speakersProduct, setSpeakersProduct] = useState([]);
  const [earphonesProduct, setEarphonesProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setHeadphonesProduct(dataJson.filter((pr) => pr.category === "headphones").sort((a, b) => Number(b.new) - Number(a.new)));
    setSpeakersProduct(dataJson.filter((pr) => pr.category === "speakers").sort((a, b) => Number(b.new) - Number(a.new)));
    setEarphonesProduct(dataJson.filter((pr) => pr.category === "earphones").sort((a, b) => Number(b.new) - Number(a.new)));
  }, []);


  function addToCart(id, name, slug, price) {
    const productToAdd = {
      id: id,
      productName: name,
      image: `../../assets/cart/image-${slug}.jpg`,
      price: price,
      qty: quantity
    };

    setCart((prevCart) => {
      if (prevCart[productToAdd.id]) {
        return {
          ...prevCart,
          [productToAdd.id]: {
            ...prevCart[productToAdd.id],
            qty: prevCart[productToAdd.id].qty + productToAdd.qty
          }
        };
      } else {
        return { ...prevCart, [productToAdd.id]: productToAdd };
      }
    });

  }

  useEffect(() => {
    let totalQ = 0;
    let totalP = 0;
    for (const item in cart) {
      totalQ += cart[item].qty;
      totalP += cart[item].qty * cart[item].price
    }
    const s = 50
    const t = 0.2 * totalP
    const am = {
      totalQty: totalQ,
      totalPrice: totalP,
      tax: t,
      shipping: s,
      grandTotal: totalP + t + s,

    }

    setAmout(am);
  }, [cart]);

  const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    payment: 'emoney',
    cardNumber: "",
    pin: "",

  }

  const [formData, setFormData] = useState(initialState)


  const handleAdd = () => {

    setQuantity(() => quantity + 1)

  }

  const handleMinus = () => {

    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)
  }
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    const nameRegex = /^[a-zA-Z\s]*$/;
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const phoneRegex = /^[0-9]{2,}$/;

    if (!formData.name || !nameRegex.test(formData.name.trim())) {
      errors.name = "Please enter a valid name";
    }

    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.address) {
      errors.address = "Please enter a valid address";
    }

    if (
      (!formData.zipCode && formData.zipCode.length < 3) ||
      (!formData.zipCode && formData.zipCode.length > 8)
    ) {
      errors.zipCode = "Please enter a valid ZIP code";
    }

    if (!formData.city) {
      errors.city = "Please enter a valid city";
    }

    if (!formData.country) {
      errors.country = "Please enter a valid country";
    }

    if (formData.payment === "emoney") {
      if (
        (!formData.cardNumber && formData.cardNumber.length < 6) ||
        (!formData.cardNumber && formData.cardNumber.length > 12)
      ) {
        errors.cardNumber = "Please enter a valid e-Money number";
      }

      if ((!formData.pin && formData.pin.length < 4) ||
        (!formData.pin && formData.pin.length > 8)) {
        errors.pin = "Please enter a valid e-Money PIN";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    console.log(errors)

    validateForm()

  }


  return (

    <div>
      <MyContext.Provider value={{ addToCart, onSubmit, onChange, errors, validateForm, initialState, formData, setFormData, check, setCheck, amout, cart, setCart, isOpen, setOpen, headphonesProduct, speakersProduct, handleAdd, handleMinus, earphonesProduct, dataJson, quantity, setQuantity }}>
        {props.children}
      </MyContext.Provider>
    </div>
  );
}

export default Context;