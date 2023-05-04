import React, { useContext, useEffect } from "react";
import { MyContext } from "../Context/context";
import { Qty } from "./Qty";
import { TiWarning } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
function ShopCart() {
  const { cart, amout, check, setCart, setOpen, setCheck } = useContext(MyContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleOneItemAddition = (id) => {
    if (cart[id]) {
      setCart((prevCart) => {
        return {
          ...prevCart,
          [id]: {
            ...prevCart[id],
            qty: prevCart[id].qty + 1,
          },
        };
      });
    }
  };
  const handleOneItemSubtraction = (id) => {
    if (cart[id]) {
      if (cart[id].qty > 1) {
        setCart((prevCart) => {
          return {
            ...prevCart,
            [id]: {
              ...prevCart[id],
              qty: prevCart[id].qty - 1,
            },
          };
        });
      } else {
        const updatedCart = { ...cart };
        toast(<p className="text-gray">{`Item ${cart[id].productName} was removed from cart`}</p>, {
          icon: <TiWarning color="hsl(22, 65%, 57%)" fontSize="2em" />,

        })
        if (Object.keys(cart).length === 1) {

          setOpen(false)

        }
        delete updatedCart[id];
        setCart(updatedCart);
      }
    }
  };

  useEffect(() => {
    function handleScroll() {
      setOpen(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setOpen]);

  const handleRemoveAll = () => {
    setCart({})
    if (check && location.pathname === "/checkout") {
      navigate(-1)
    }
    setOpen(false)

    toast.error(<p className="text-gray">{`All Items were removed from cart`}</p>, {
      icon: <TiWarning color="hsl(22, 65%, 57%)" fontSize="1.8em" />,

    })
  };
  return (
    <>
      <div
        onClick={(e) => {
          setOpen(false);
        }}
        className="bg-black opacity-70 w-full h-full absolute  z-10 top-0"
      ></div>

      <div className="absolute px-6 py-8 w-[23rem] bg-white  flex rounded-lg flex-col gap-6 z-10 right-20 max-md:left-2/4 max-md:-translate-x-2/4 max-md:mx-auto  max-md:w-[calc(100vw - 9rem)]">
        <button
          onClick={() => {
            setOpen(false);
          }}
          className="text-white bg-orange w-8 h-8 flex justify-center items-center text-[1.2rem] rounded-full -top-4 -right-3 absolute"
        >
          <IoClose />
        </button>
        {Object.keys(cart).length > 0 ? (
          <>
            <div className="flex justify-between">
              <h1 className="font-semibold">Cart ({amout.totalQty})</h1>
              <button className="underline" onClick={() => {
                handleRemoveAll()



              }}>Remove all</button>
            </div>

            <div className="flex flex-col gap-4">
              {Object.keys(cart).map((p) => {
                return (
                  <div
                    key={cart[p].id}
                    className="flex  items-center  justify-between "
                  >
                    <div className="flex gap-5">
                      <div className="overflow-hidden rounded-lg ">
                        <img src={cart[p].image} alt="" className="w-[5rem]" />
                      </div>
                      <div
                        className="flex flex-col justify-center
                  "
                      >
                        <h4 className="font-semibold text-[1.1rem]">
                          {cart[p].productName.split(" ")[0]}
                          {cart[p].productName.split(" ")[1] === "Mark"
                            ? " MK"
                            : ""}
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
                    <div>
                      <Qty
                        quantity={cart[p].qty}
                        handleMinus={() => {
                          handleOneItemSubtraction(p);
                        }}
                        handleAdd={() => handleOneItemAddition(p)}
                        wi={90}
                        he={42}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between">
              <p>Total</p>
              <p className="font-semibold">
                $ {amout.totalPrice.toLocaleString("en-US")}
              </p>
            </div>

            <Link
              to="/checkout"
              onClick={() => {
                setOpen(false)
                setCheck(true)
              }}
              className="bg-orange block text-white hover:bg-lightGray max-lg:mx-auto hover:text-black  transition max-sm:mx-auto text-center  text-[.9rem] px-[.4rem] py-[.6rem] w-full"
            >
              Checkout
            </Link>
          </>
        ) : (
          <>
            <h1 className="font-semibold text-gray">Your cart is empty</h1>
          </>
        )}
      </div >
    </>
  );
}

export default ShopCart;
