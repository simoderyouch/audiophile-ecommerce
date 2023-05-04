import Mobileimg from '../../assets/shared/mobile/image-best-gear.jpg'
import Tabletimg from '../../assets/shared/tablet/image-best-gear.jpg'
import Desktopimg from '../../assets/shared/desktop/image-best-gear.jpg'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Aside() {

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

    <div className='container flex my-[11rem] max-lg:px-6 max-lg:my-[7rem] justify-between items-center max-lg:flex-col-reverse' data-aos="fade-up">


      <div className='flex flex-col flex-[1_1_45%] gap-10 max-w-md max-lg:text-center max-lg:max-w-full'>
        <h1 className='text-black font-bold text-[2.5rem] leading-[1.2]'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h1>
        <p className='leading-[1.66] text-[0.9rem] text-gray max-lg:px-5 '>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <div className=' rounded-md overflow-hidden ml-9 max-lg:ml-0 max-lg:mb-9'>
        <picture className='max-w-full' >
          <source media="(min-width: 62em)" srcSet={Desktopimg} />
          <source media="(min-width: 30em)" srcSet={Tabletimg} />
          <img className='' src={Mobileimg} alt="" />
        </picture>
      </div>
    </div>

  );

}


export default Aside;

