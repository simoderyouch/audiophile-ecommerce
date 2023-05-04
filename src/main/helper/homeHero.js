import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

function HomeHero() {

  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      delay: 1,
    });
  }, []);
  return (
    <div className='hero text-white  bg-almostBlack ' data-aos="fade" >
      <div className="container py-[9.3rem] max-lg:py-[8.3rem]  max-sm:px-[2rem]">

        <div className="text w-[27.75rem] max-[570px]:w-[100%] max-[760px]:mx-auto max-[760px]:text-center ">
          <p className='text-[.875rem] font-[400] tracking-[10px] mb-2 opacity-[.4]'>NEW PRODUCT</p>
          <h1 className=' text-[3.5rem] leading-[1.04] font-[700] max-[570px]:text-[3rem]'>XX99 MARK II HEADPHONES</h1>

          <p className='text-[.9375rem]  max-[760px]:mx-auto max-w-[38ch] my-[2rem] leading-[1.6] opacity-[.75]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <NavLink to="/headphones/xx99-mark-two-headphones" className='bg-orange block hover:bg-white hover:text-orange max-[760px]:mx-auto text-center text-[.875rem] px-[.8rem] py-[.8rem] max-w-[10rem]'>SEE PRODUCT</NavLink>
        </div>

      </div>
    </div>



  );
}



export default HomeHero;