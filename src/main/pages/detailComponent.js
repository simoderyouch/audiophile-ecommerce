import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { MyContext } from "../Context/context";
import { TiWarning } from "react-icons/ti";
import Aside from "../helper/aside";
import { Qty } from "../helper/Qty";
import ProductList from "../helper/productList";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from 'react-hot-toast';


function DetailComponent() {
  const { dataJson, quantity, cart, handleMinus, handleAdd, addToCart } =
    useContext(MyContext);
  const [clickCount, setClickCount] = useState(0);
  const { id } = useParams();

  const getProduct = dataJson.find((product) => id === product.slug);

  const features = getProduct.features.split("\n\n");
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/");

  const goToPreviousPath = () => {
    navigate(-1);
  };
  const handleToast = () => {

    if (!cart.hasOwnProperty(getProduct.id)) {
      toast.success(<p className="text-gray">{`Item '${getProduct.name}' was added to cart`}</p>, {


        iconTheme: {
          primary: 'hsl(22, 65%, 57%)',
          secondary: 'white',
        },
      })


    }
    else {
      if (clickCount < 2) {
        toast(<p className="text-gray">{`Item '${getProduct.name}' already exist in cart`}</p>, {
          icon: <TiWarning color="hsl(22, 65%, 57%)" fontSize="2em" />,


        })
        console.log(clickCount)
        setTimeout(() => {
          setClickCount(0)
        }, 3000)
      }



    }
  }
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      delay: 1,
    });
  }, []);

  return (
    <>
      <div className="container max-lg:px-6  ">



        <button
          onClick={goToPreviousPath}
          className="opacity-[.7] font-semibold text-gray text-[.9rem] mt-[5rem] max-sm:mt-[3rem]"
          data-aos="fade"
        >
          Go Back
        </button>
        <div
          className={
            "gap-[6.4rem]  mt-[2.9rem] max-lg:gap-[3.4rem] justify-center items-center flex  flex-row max-sm:flex-col"
          }
          data-aos="fade"
        >
          <div className="flex-[1_1_50%] rounded-md overflow-hidden">
            <picture>
              <source
                media="(min-width: 62em)"
                srcSet={`../.${getProduct.image.desktop}`}
              />
              <source
                media="(min-width: 600px)"
                srcSet={`../.${getProduct.image.tablet}`}
              />
              <img src={`../.${getProduct.image.mobile}`} alt="" />
            </picture>
          </div>

          <div className="flex-[50%] ">
            <p className="text-[.8rem] font-[400] tracking-[10px] text-orange mb-2 ">
              NEW PRODUCT
            </p>
            <h1 className="text-[2rem] uppercase max-w-[15ch] leading-9 font-bold max-sm:max-w-full">
              {getProduct.name}
            </h1>
            <p className="text-[.9rem] py-5 text-gray">
              {getProduct.description}
            </p>
            <p className="font-semibold flex gap-1 text-[1.18rem] ">
              <span>$</span>
              {getProduct.price.toLocaleString('en-US')}
            </p>

            <div className="flex gap-4 mt-7 max-sm:gap-3">
              <div> <Qty
                quantity={quantity}
                handleMinus={handleMinus}
                handleAdd={handleAdd}
                wi={120}
                he={48}
              />
              </div>


              <button
                onClick={() => {
                  addToCart(
                    getProduct.id,
                    getProduct.name,
                    getProduct.slug,
                    getProduct.price
                  )
                  handleToast()
                  setClickCount((prevCount) => prevCount + 1)

                }
                }
                className="uppercase bg-orange block text-white hover:bg-lightGray  hover:text-black  transition  text-center  text-[.75rem] px-[.8rem] py-[.8rem] w-[9.5rem]"
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex mt-[8rem] gap-[8rem] items-start max-lg:flex-col max-md:gap-[4rem] max-md:mt-[4rem] "
          data-aos="fade"
        >
          <div className="max-w-[35rem] max-lg:max-w-full">
            <h1 className="uppercase font-extrabold text-[1.65rem]">
              features
            </h1>
            <div className="flex flex-col gap-9 text-[.8rem] mt-9 font-semibold  text-gray ">
              {features.map((ft, index) => {
                return <p key={index}>{ft}</p>;
              })}
            </div>
          </div>
          <div className="max-lg:flex max-lg:items-start max-lg:justify-between max-lg:w-full max-sm:flex-col">
            <h1 className="uppercase font-extrabold text-[1.65rem]">
              in the box
            </h1>
            <ul className="flex flex-col gap-3 mt-9 max-lg:mt-1 max-sm:mt-9">
              {getProduct.includes.map((item) => (
                <li key={item.item} className="flex  gap-6 items-center">
                  <span className="font-semibold text-[.9rem] text-orange">
                    {item.quantity}x
                  </span>
                  <span className="text-gray font-semibold text-[.9rem]">
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="grid grid-cols-[2fr 3fr] gap-7 mt-[8.7rem] max-md:mt-[7rem] max-sm:grid-cols-[1fr]"
          data-aos="fade"
        >
          <div className="rounded-lg overflow-hidden">
            <picture>
              <source
                media="(min-width: 62em)"
                srcSet={`../.${getProduct.gallery.first.desktop}`}
              />
              <source
                media="(min-width: 600px)"
                srcSet={`../.${getProduct.gallery.first.tablet}`}
              />
              <img
                src={`../.${getProduct.gallery.first.mobile}`}
                className="object-cover w-full h-full"
                alt=""
              />
            </picture>
          </div>
          <div className="rounded-lg overflow-hidden">
            <picture>
              <source
                media="(min-width: 62em)"
                srcSet={`../.${getProduct.gallery.second.desktop}`}
              />
              <source
                media="(min-width: 600px)"
                srcSet={`../.${getProduct.gallery.second.tablet}`}
              />
              <img
                src={`../.${getProduct.gallery.second.mobile}`}
                className="object-cover w-full h-full"
                alt=""
              />
            </picture>
          </div>
          <div className="rounded-lg area overflow-hidden">
            <picture>
              <source
                media="(min-width: 62em)"
                srcSet={`../.${getProduct.gallery.third.desktop}`}
              />
              <source
                media="(min-width: 600px)"
                srcSet={`../.${getProduct.gallery.third.tablet}`}
              />
              <img
                src={`../.${getProduct.gallery.third.mobile}`}
                className="object-cover w-full h-full"
                alt=""
              />
            </picture>
          </div>
        </div>

        <div className="text-center mt-[8rem]" data-aos="fade">
          <h1 className="uppercase mb-[3.5rem] font-extrabold text-[1.65rem]">
            YOU MAY ALSO LIKE
          </h1>
          <div className="flex gap-8 max-[600px]:flex-col">
            {getProduct.others.map((product, idx) => {
              return (
                <div
                  key={idx}
                  className="flex flex-col  items-center gap-9 max-sm:gap-4"
                >
                  <picture className="overflow-hidden ">
                    <source
                      media="(min-width: 62em)"
                      srcSet={`../.${product.image.desktop}`}
                    />
                    <source
                      media="(min-width: 600px)"
                      srcSet={`../.${product.image.tablet}`}
                    />
                    <img
                      src={`../.${product.image.mobile}`}
                      className="rounded-lg"
                      alt=""
                    />
                  </picture>

                  <h4 className="uppercase font-extrabold text-[1.5rem] max-md:text-[1.1rem]">
                    {product.name}
                  </h4>

                  <Link
                    to={`/${pathname[1]}/${product.slug}`}
                    className="uppercase bg-orange block text-white hover:bg-lightGray  hover:text-black  transition  text-center  text-[.75rem] px-[.8rem] py-[.8rem] w-[9.5rem]"
                  >
                    see product
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[11rem]  max-[600px]:mt-[7rem]  max-sm:mt-[11rem] ">
          <ProductList />
        </div>
      </div>
      <Aside />
    </>
  );
}

export default DetailComponent;
