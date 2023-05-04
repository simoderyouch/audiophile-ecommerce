import logo from '../../assets/shared/desktop/logo.svg'
import UlNav from './UlNav';
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Footer() {



    return (

        <div className="bg-almostBlack ">
            <div className='container   max-sm:px-[2rem]'>
                <div className='h-1 relative w-20 bg-orange max-sm:left-1/2 max-sm:-translate-x-1/2'></div>
                <div className="flex justify-between max-sm:items-center mt-14 max-md:flex-col max-md:gap-4">

                    <NavLink to="/" >
                        <span>
                            <img src={logo} alt="logo" />
                        </span>
                    </NavLink >
                    <UlNav st={{ top: `auto` }} cl=" flex 
                            text-white gap-9 text-[0.88rem] flex-row max-sm:gap-5 max-sm:flex-col max-sm:items-center  "></UlNav>
                </div>

                <div className="grid  grid-cols-2 text-white gap-12 max-sm:gap-7 max-sm:grid-cols-1 w-full mt-10 max-sm:justify-center ">

                    <p className='text-[0.9375rem] leading-[1.66] text-verylightGray max-sm:text-center max-md:col-span-2 max-sm:col-span-1'>Audiophile is an all in one stop to fulfill your audio

                        needs. We're a small team of music lovers and sound
                        specialists who are devoted to helping you get the
                        most out of personal audio. Come and visit our demo
                        facility - we’re open 7 days a week.</p>

                    <ul className='flex gap-3 right-0 relative justify-self-end max-sm:justify-self-center max-sm:mb-8  max-md:order-last max-md:self-start self-end '>
                        <li><a href="/">< FaFacebookSquare size={27} /></a></li>
                        <li><a href="/"><FaTwitter size={27} /></a></li>
                        <li><a href="/"><FaInstagram size={27} /></a></li>
                    </ul>
                    <p className="text-verylightGray text-[0.9375rem] sm:mb-8 max-sm:text-center max-sm:text-[0.75rem]">Copyright 2021. All Rights Reserved</p>
                </div>

            </div>
        </div>

    );

}


export default Footer;

