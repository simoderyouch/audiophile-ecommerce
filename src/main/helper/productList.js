import headphonesimg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphonesimg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakersimg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png'
import { NavLink } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProductList() {


    useEffect(() => {
        AOS.init({
            // Global settings
            duration: 1000,
            easing: 'ease-in-out',
            offset: 100,
            delay: 1,
        });
    }, []);
    const list = [
        {
            img: headphonesimg,
            title: "headphones"
        },
        {
            img: speakersimg,
            title: "speakers"
        },
        {
            img: earphonesimg,
            title: "earphones"
        }
    ]

    return (
        <div className={`grid grid-cols-3 gap-7 max-[580px]:grid-cols-1`}>
            {
                list.map((pd, index) => {

                    return <NavLink to={"/" + pd.title} key={index} className='relative max-[580px]:mt-[5rem]' data-aos="fade-up" data-aos-duration={(index * 200) + 800}>
                        <div className=' bg-lightGray text-center rounded pt-[5.5rem] pb-[1.3rem]'>
                            <img src={pd.img} alt={pd.title} className='w-[11rem] absolute translate-y-[-38%] uppercase -translate-x-1/2 left-2/4 top-0' />

                            <h4 className='font-bold mb-2 text-[1rem] tracking-[0.0669rem]'>{pd.title}</h4>
                            <p className='flex justify-center items-center font-bold text-gray text-[.7rem] gap-2'>SHOP < IoIosArrowForward color="hsl(22, 65%, 57%)" /></p>
                        </div>
                    </NavLink>
                })
            }
        </div>

    );
}


export default ProductList;