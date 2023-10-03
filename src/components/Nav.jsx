import { hamburger } from "../assets/icons";
import { headerLogoImage } from "../assets/images";
// import { navLinks } from "../constants";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogoImage}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <Link></Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {/* {navLinks.map((item) => (
            <li key={item.label}>
            <Link to={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
             {item.label}
            </Link>
              
            </li>
          ))}  */}
          <li>
            <Link to="/" 
            className="font-montserrat leading-normal text-lg text-black">
            Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-montserrat leading-normal text-lg text-slate-gray">
            About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-montserrat leading-normal text-lg text-slate-gray">
            Contact
            </Link>
          </li>
          <li>
            <Link to="/product" className="font-montserrat leading-normal text-lg text-slate-gray">
            Product
            </Link>
          </li>
          
          
        </ul>
        {/* <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div> */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
