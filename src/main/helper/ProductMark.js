import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function ProductMark({ index, data }) {
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

        <div className={`gap-[6.4rem] my-[4.7rem]  max-lg:gap-[3.4rem] justify-center items-center flex  ${index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'} max-lg:flex-col`} data-aos="fade">
            <div className='flex-[1_1_55%] rounded-md overflow-hidden' >
                <picture>
                    <source media="(min-width: 62em)" srcSet={`../.${data.categoryImage.desktop}`} />
                    <source media="(min-width: 30em)" srcSet={`../.${data.categoryImage.tablet}`} />
                    <img src={`../.${data.categoryImage.mobile}`} alt="" />
                </picture>
            </div>

            <div className='flex-[1_1_45%] max-lg:text-center'>
                <p className='text-[.8rem] font-[400] tracking-[10px] text-orange mb-2 '>NEW PRODUCT</p>
                <h1 className='text-[2rem] uppercase max-w-[10ch] leading-9 font-bold max-lg:max-w-full'>{data.name}</h1>
                <p className='text-[.9rem] py-5 text-gray'>{data.description}</p>
                <Link to={data.slug} className='bg-orange block text-white hover:bg-lightGray max-lg:mx-auto hover:text-black  transition max-sm:mx-auto text-center  text-[.75rem] px-[.4rem] py-[.8rem] w-[7.5rem]'>SEE PRODUCT</Link>
            </div>


        </div>
    );
}


export default ProductMark;