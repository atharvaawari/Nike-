
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import  ThemeButton  from "../buttons/ThemeButton";

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 absolute w-full dark:bg-slate-500 dark:fixed dark:z-20 '>
        <nav className='flex justify-between items-center max-container  '>
            <a href="/">
                <img
                src={headerLogo}
                alt="logo"
                width={130}
                height={29}/>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item)=>(
                <li key={item.label} >
                    <a href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray dark:text-white'>{item.label}
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