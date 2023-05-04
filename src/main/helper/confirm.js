import { Link } from "react-router-dom";
import Mark from "../../assets/Mark.svg";
import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../Context/context";

function Confirmation() {
  const { cart, setCart, amout } = useContext(MyContext);
  const [el, setEl] = useState([]);
  const [v, setv] = useState(false);
  console.log(cart);
  useEffect(() => {
    if (!v) {
      setEl([Object.keys(cart)[0]]);
    } else {
      setEl(Object.keys(cart));
    }
  }, [v, cart]);
  console.log(el);
  return (
    <>
      <div className="bg-black opacity-50 w-full h-full fixed  z-10 top-0"></div>
      <div className=" top-1/2 left-1/2  -translate-x-1/2 w-[32rem] max-sm:w-[90vw] rounded-lg -translate-y-1/2 fixed z-20 bg-white p-9 flex flex-col ">
        <div className="w-12 h-12 bg-orange flex items-center justify-center rounded-full">
          <img className="check-mark-wrapper-img" src={Mark} alt="" />
        </div>

        <h3 className="text-[1.8rem] font-semibold uppercase leading-8 my-5 ">
          Thank you <br />
          for your order
        </h3>

        <p className="text-gray text-[.85rem] mb-6">
          You will receive an email confirmation shortly.
        </p>

        <div className=" ">
          <div className="flex rounded-lg max-md:flex-col  bg-lightGray  justify-between max-md:justify-around">
            <div
              className={`flex flex-col md:flex-[1_1_65%] pt-5 items-center justify-center`}
            >
              <div className="flex flex-col px-5 gap-4   w-full">
                {el.map((e, i) => {
                  return (
                    <div key={i} className="flex justify-between  gap-2 items-start ">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          className="w-[3.3rem]"
                          src={cart[e].image}
                          alt=""
                        />
                      </div>

                      <div className="flex flex-1 justify-between mt-2 w-[7rem]">
                        <div className="flex flex-col">
                          <h4 className="font-semibold text-[.9rem]">
                            {cart[e].productName.split(" ")[0]}
                            {cart[e].productName.split(" ")[1] === "Mark"
                              ? " M"
                              : ""}
                            {cart[e].productName.split(" ")[1] === "Mark"
                              ? " " + cart[e].productName.split(" ")[2]
                              : ""}
                          </h4>

                          <p className="font-semibold text-gray text-[.8rem] flex gap-1">
                            {" "}
                            <span>$</span>
                            {cart[e].price.toLocaleString("en-US")}
                          </p>
                        </div>

                      </div>
                      <p className="font-semibold text-gray mt-2 text-[.8rem]">{`x ${cart[e].qty}`}</p>
                    </div>
                  );
                })}
              </div>
              {Object.keys(cart).length > 1 &&
                (!v ? (
                  <p
                    className="text-[.76rem] py-4 text-gray hover:underline"
                    onClick={() => {
                      setv(!v);
                    }}
                  >{`and ${Object.keys(cart).length - 1} other item(s)`}</p>
                ) : (
                  <div className="mt-1 w-full text-center">
                    <div className="h-[0.4px] w-[80%] mx-auto bg-gray relative"></div>

                    <p
                      className="text-[.76rem] py-3  text-gray hover:underline"
                      onClick={() => {
                        setv(!v);
                      }}
                    >
                      View less
                    </p>
                  </div>
                ))}
            </div>

            <div
              className={`bg-almostBlack md:flex-[1_1_45%] ${Object.keys(cart).length === 1 ? "max-md:mt-5" : ""
                } md:rounded-r-lg max-md:rounded-b-lg text-white flex flex-col  justify-center p-7`}
            >
              <h4 className="text-verylightGray">Grand Total</h4>

              <span className="font-semibold text-[.8rem]">
                $ {amout.grandTotal.toLocaleString("en-US")}
              </span>
            </div>
          </div>
        </div>

        <Link
          to="/"
          onClick={() => {
            setCart({});
          }}
          className="bg-orange block text-white mt-6 hover:bg-lightGray max-lg:mx-auto hover:text-black  transition max-sm:mx-auto text-center  text-[.9rem] px-[.4rem] py-[.6rem] w-full "
        >
          Back to home
        </Link>
      </div>
    </>
  );
}

export default Confirmation;
