import { NavLink } from 'react-router-dom';

function UlNav(props) {
    return (

        <ul className={props.cl} style={props.st}>
            <li onClick={props.toggleMenu}><NavLink to="/" className='hover:text-orange uppercase font-semibold'>Home</NavLink ></li>
            <li onClick={props.toggleMenu}><NavLink to="/headphones" className='hover:text-orange uppercase font-semibold'>Headphones</NavLink ></li>
            <li onClick={props.toggleMenu} ><NavLink to="/speakers" className='hover:text-orange uppercase font-semibold'>Speakers</NavLink ></li>
            <li onClick={props.toggleMenu}><NavLink to="/earphones" className='hover:text-orange uppercase font-semibold'>Earphones</NavLink ></li>
        </ul>);
}
export default UlNav;  