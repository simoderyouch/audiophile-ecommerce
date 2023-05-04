import React, { useContext } from "react";

import { MyContext } from "../Context/context";
export function Summary(props) {
  const { cart, amout } = useContext(MyContext);

  return (
    <div className="flex-[1_1_35%]">
      <div className="bg-white  p-6 gap-6 flex flex-col rounded-lg">
        <h4 className="uppercase  font-semibold">summary</h4>

        <div className="flex flex-col gap-4 ">
          {Object.keys(cart).map((p) => {
            return (
              <div
                key={cart[p].id}
                className="flex  items-center  justify-between "
              >
                <div className="flex gap-5">
                  <div className="overflow-hidden rounded-lg ">
                    <img src={cart[p].image} alt="" className="w-[4rem]" />
                  </div>
                  <div
                    className="flex flex-col justify-center
                  "
                  >
                    <h4 className="font-semibold text-[1rem]">
                      {cart[p].productName.split(" ")[0]}
                      {cart[p].productName.split(" ")[1] === "Mark" ? " MK" : ""}
                      {cart[p].productName.split(" ")[1] === "Mark"
                        ? " " + cart[p].productName.split(" ")[2]
                        : ""}
                    </h4>
                    <p className="font-semibold text-gray text-[.9rem] flex gap-1 ">
                      <span>$</span>
                      {cart[p].price.toLocaleString("en-US")}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray">x{cart[p].qty}</p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <p className="text-gray uppercase text-[.8rem]">total</p>
            <p className="font-semibold">
              $ {amout.totalPrice.toLocaleString("en-US")}
            </p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="text-gray uppercase text-[.8rem]">shipping</p>
            <p className="font-semibold">
              $ {amout.shipping.toLocaleString("en-US")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray uppercase text-[.8rem]">
              vat <span>(included)</span>
            </p>
            <p className="font-semibold">$ {amout.tax.toLocaleString("en-US")}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-gray uppercase text-[.8rem]">grand Total</p>
            <p className="font-semibold text-orange">
              $ {amout.grandTotal.toLocaleString("en-US")}
            </p>
          </div>
        </div>
        <button
          onSubmit={
            props.onSub
          }
          type="submit"

          className="bg-orange block text-white hover:bg-lightGray max-lg:mx-auto hover:text-black  transition max-sm:mx-auto text-center  text-[.9rem] px-[.4rem] py-[.6rem] w-full"
        >
          continue & pay
        </button>
      </div>
    </div>
  );
}
