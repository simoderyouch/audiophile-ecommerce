import { useNavigate } from "react-router-dom";

import { MyContext } from "../Context/context";
import React, { useContext, useState } from "react";
import "../../index.css";
import { CheckoutDetails } from "../helper/checkoutDetail";
import { Summary } from "../helper/summary";
import Confirmation from "../helper/confirm";
function Checkout() {
  const { cart, check, validateForm } = useContext(MyContext);

  const [Done, setDone] = useState(false);
  const navigate = useNavigate();

  const goToPreviousPath = () => {
    /*  navigate(-1); */
  };

  /* if (check && Object.keys(cart).length === 0) {
    navigate(-1);
  }
 */
  const handleSubmit = (event) => {
    event.preventDefault();

    validateForm();
    const isValid = validateForm();
    console.log("done" + isValid);
    if (isValid) {
      setDone(true);
    }
  };
  return (
    <div className="bg-lightGray pt-[5rem] pb-[7rem] max-md:pt-[2rem]">
      <form className="container max-lg:px-6  " onSubmit={handleSubmit}>
        <button
          onClick={goToPreviousPath}
          className="opacity-[.7]  text-gray font-semibold text-[.9rem]  "
        >
          Go Back
        </button>

        <div className="flex gap-5 mt-8 max-lg:flex-col ">
          <CheckoutDetails />
          <Summary onSub={handleSubmit} />
        </div>
      </form>
      {Done ? <Confirmation /> : ""}
    </div>
  );
}

export default Checkout;
