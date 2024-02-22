
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import  ThemeButton  from "../buttons/ThemeButton";

const Nav = () => {
  return (
    <header className='padding-x p-5 z-20 w-full dark:bg-white'>
        <nav className='flex justify-between items-center max-container '>
            <nav href="/">
                <img
                src={headerLogo}
                alt="logo"
                width={130}
                height={20}/>
            </nav>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item)=>(
                <li key={item.label} >
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray dark:text-black hover:text-violet-600/80'>{item.label}
                    </a>
                </li>
            ))}
            </ul>
            <div className='max-lg:block hidden'>
                <img
                src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}/>
            </div>
            <ThemeButton/>  
        </nav>
    </header>
  )
}

export default Nav