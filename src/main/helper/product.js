import { NavLink } from 'react-router-dom';

import MobileZx9 from '../../assets/home/mobile/image-speaker-zx9.png'
import TabletZx9 from '../../assets/home/tablet/image-speaker-zx9.png'
import DesktopZx9 from '../../assets/home/desktop/image-speaker-zx9.png'
import MobileZx7 from '../../assets/home/mobile/image-speaker-zx7.jpg'
import TabletZx7 from '../../assets/home/tablet/image-speaker-zx7.jpg'
import DesktopZx7 from '../../assets/home/desktop/image-speaker-zx7.jpg'


import DesktopYx1 from '../../assets/home/desktop/image-earphones-yx1.jpg'
import TabletYx1 from '../../assets/home/tablet/image-earphones-yx1.jpg'
import MobileYx1 from '../../assets/home/mobile/image-earphones-yx1.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Product() {

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

        <div className='select-products container mb-10 mt-[8rem] flex flex-col' >

            <div className="flex product max-lg:px-6 max-lg:gap-9 rounded-md bg-orange pt-[7rem] gap-[9rem] overflow-hidden  max-lg:flex-col max-lg:items-center justify-center  max-lg:pt-[4rem] items-start max-lg:pb-[4rem]" data-aos="fade-up">

                <picture className='-mb-[1rem]'>
                    <source media="(min-width: 61.25rem)" srcSet={DesktopZx9} />
                    <source media="(min-width: 38.75rem)" srcSet={TabletZx9} />
                    <img className='w-[23.625rem] top-[0.8rem] max-lg:w-[12.625rem]' src={MobileZx9} alt="" />
                </picture>

                <div className="text-white flex flex-col gap-9 mt-7 max-lg:text-center">

                    <h4 className='text-[3.3rem] max-w-[3ch] leading-[1.04] font-[700] max-lg:max-w-[10ch] uppercase'>Zx9 speaker</h4>

                    <p className='text-[.9375rem]  max-[760px]:mx-auto max-w-[33ch] leading-[1.6] opacity-[.8]'>
                        Upgrade to premium speakers that are phenomenally built to
                        deliver truly remarkable sound
                    </p>
                    <NavLink to="/speakers/zx9-speaker" className='bg-black block text-white hover:bg-lightGray hover:text-black  transition max-lg:mx-auto text-center  text-[.75rem] px-[.7rem] py-[.8rem] w-[9.2rem]'>SEE PRODUCT</NavLink>
                </div>

            </div>



            <div className='relative flex w-full rounded-md overflow-hidden h-fit  justify-center mt-12' data-aos="fade-up">

                <div className='absolute top-[50%] left-[5.9375rem] max-lg:left-[4rem] max-sm:left-[2rem]  translate-y-[-50%]'>

                    <h4 className='text-black font-bold text-[1.85rem] uppercase mb-8'>
                        Zx7 speaker
                    </h4>

                    <NavLink to="/speakers/zx7-speaker" className='bg-none hover:bg-black hover:text-white block border text-center text-[.75rem] px-[2rem] py-[.7rem] max-w-[10rem]'>SEE PRODUCT</NavLink>

                </div>


                <picture className=' top-0 w-full left-0 -z-10'>
                    <source media="(min-width: 61.25rem)" srcSet={DesktopZx7} />
                    <source media="(min-width: 38.75rem)" srcSet={TabletZx7} />
                    <img className='w-full h-auto' src={MobileZx7} alt="" />
                </picture>


            </div>



            <div className='rounded-md  overflow-hidden flex gap-9 mt-12 max-sm:flex-col ' data-aos="fade-up">

                <div className='rounded-md overflow-hidden flex-[1_1_50%]'>
                    <picture className=''>
                        <source media="(min-width: 61.25rem)" srcSet={DesktopYx1} />
                        <source media="(min-width: 38.75rem)" srcSet={TabletYx1} />
                        <img className='' src={MobileYx1} alt="" />
                    </picture>
                </div>

                <div className='rounded-md bg-lightGray flex items-center flex-[1_1_50%] max-sm:py-14 max-sm:justify-center' >
                    <div className='ml-[5.9375rem]  max-lg:ml-[2rem] max-sm:ml-[0.001rem]'>
                        <h4 className='text-black font-bold text-[1.85rem] uppercase mb-8'>
                            Yx1 earphones
                        </h4>
                        <NavLink to="/earphones/yx1-earphones" className='bg-none hover:bg-black hover:text-white block border max-sm:mx-auto text-center text-[.75rem] px-[2rem] py-[.7rem] max-w-[10rem]'>SEE PRODUCT</NavLink>
                    </div>

                </div>

            </div>

        </div>

    );
}



export default Product;