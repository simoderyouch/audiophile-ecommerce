import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header(props) {
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
        <div className="w-full bg-almostBlack text-white  py-[4.5rem] flex items-center justify-center" data-aos="fade">
            <h1 className="uppercase text-[2.54rem] font-bold ">{props.titre}</h1>
        </div>
    );
}



export default Header