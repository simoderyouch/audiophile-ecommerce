import React, { useContext } from "react";
import svg from "../../assets/icon-cash-on-delivery.svg";
import { MyContext } from "../Context/context";
import { Input } from "./input";

export function CheckoutDetails() {
  const { formData, onChange, errors, onSubmit } = useContext(MyContext);

  let invalid = "name";

  for (const i in errors) {
    if (!errors.i) {

      invalid = i;
      console.log(invalid)
      break;
    }
  }


  return (
    <div id="checkout" className="bg-white rounded-lg flex-[1_1_65%] p-12 max-sm:p-8">
      <h1 className="font-semibold text-[1.7rem] uppercase">checkout</h1>
      <fieldset className="mt-9">
        <p className="text-orange tracking-wider uppercase font-semibold text-[.76rem]">
          billing details
        </p>
        <div className="grid grid-cols-2 mt-3 gap-4 max-sm:grid-cols-1">
          <Input
            type="text"
            label="Name"
            placeho="Alexel Ward"
            name="name"
            error={errors.name}
            invalid={invalid}
          />

          <Input
            type="text"
            label="Email Address"
            placeho="alexel@mail.com"
            name="email"
            error={errors.email}
            invalid={invalid}
          />
          <Input
            type="tel"
            label="PhoneNumber"
            placeho="+1202-555-0136"
            name="phone"
            error={errors.phone}
            invalid={invalid}
          />
        </div>
      </fieldset >
      <div className="mt-9">
        <p className="text-orange tracking-wider uppercase font-semibold text-[.76rem]">
          shipping info
        </p>
        <div className="grid grid-cols-2 mt-3 gap-4 max-sm:grid-cols-1">
          <Input
            ad={true}
            type="text"
            label="Address"
            placeho="1137 Williams Avenue"
            name="address"
            error={errors.address}
            invalid={invalid}
          />
          <Input
            type="text"
            label="ZIP Code"
            error={errors.zipCode}
            invalid={invalid}
            placeho="10001"
            name="zipCode"
          />
          <Input
            type="text"
            label="City"
            error={errors.city}
            invalid={invalid}
            placeho="New York"
            name="city"
          />
          <Input
            type="text"
            label="Country"
            placeho="United States"
            name="country"
            error={errors.country}
            invalid={invalid}
          />
        </div>
      </div>
      <div className="mt-9">
        <p className="text-orange tracking-wider uppercase font-semibold text-[.8rem]">
          payment details
        </p>
        <div className="flex justify-between mt-5 max-sm:flex-col">
          <p className="font-semibold text-[.74rem] flex-[1_1_40%]">
            Payment Method
          </p>

          <div className="flex-[1_1_40%] flex flex-col gap-2">
            <div className="radio">
              <input
                onChange={onChange}
                id="radio-1"
                name="payment"
                type="radio"
                value="emoney"
                checked={formData.payment === "emoney"}
              />

              <label
                htmlFor="radio-1"
                className="radio-label border-[1.8px]  flex gap-4 items-center text-[.8em] rounded-lg pl-5 py-4  font-semibold mt-2 border-stone-300"
              >
                e-Money
              </label>
            </div>
            <div className="radio">
              <input
                onChange={onChange}
                id="radio-2"
                name="payment"
                type="radio"
                value="cashondelivery"
                checked={formData.payment === "cashondelivery"}
              />
              <label
                htmlFor="radio-2"
                className="radio-label border-[1.8px]  flex gap-4 items-center text-[.8rem] rounded-lg pl-5 py-4  font-semibold mt-2 border-stone-300"
              >
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        {formData.payment !== "" && formData.payment === "emoney" ? (
          <div className="grid grid-cols-2 gap-4 mt-9 max-sm:grid-cols-1">
            <Input
              type="text"
              label="e-Money Number"
              placeho="238521993"
              name="cardNumber"
              error={errors.cardNumber}
              invalid={invalid}
            />
            <Input
              error={errors.pin}
              invalid={invalid}
              type="text"
              label="e-Money PIN"
              placeho="6891"
              name="pin"
            />
          </div>
        ) : (
          <div className="flex mt-9 gap-3">
            <img src={svg} alt="" />
            <p className="text-gray text-[.8rem]">
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
