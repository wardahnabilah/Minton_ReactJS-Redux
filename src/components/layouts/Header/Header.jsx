import { useEffect, useState } from 'react'
import mintonLogo from '../../../assets/images/minton-logo.png'
import { NavItem } from './NavItem'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ButtonLinkSmall } from '../../elements/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../../store/themeSlice'
import { Collapse } from '@material-tailwind/react'

export function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const { isDark } = useSelector(state=>state.theme)
    const pathname = useLocation().pathname

    // Dark theme
    useEffect(()=>{
        if(isDark) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDark])
    
    // Close the navbar when the path change
    useEffect(()=>{
        setIsNavOpen(false)
    },[location.pathname])

    // Navbar Toggle
    function handleNavToggle() {
        setIsNavOpen(!isNavOpen)
    }

    // navList
    const navList = (
        <ul className="md:flex">
            <NavItem>
                <NavLink to="/" className="block">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/booking-schedule" className="block">Booking Schedule</NavLink>
            </NavItem>
            <NavItem>
                <div onClick={()=> dispatch(changeTheme())}>
                    { isDark ? <svg className="inline w-5 mr-2 pb-1 fill-primary-dark dark:fill-white hover:cursor-pointer group-hover:fill-accent-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
                                : <svg className="inline w-6 mr-1 fill-primary-dark dark:fill-white hover:cursor-pointer group-hover:fill-accent-yellow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                    }
                    <span>
                        {isDark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                </div>
            </NavItem>
            <NavItem className={pathname === '/create-booking' ? 'hidden' : ''}>
                <ButtonLinkSmall pathName="/create-booking">Booking Now</ButtonLinkSmall>
            </NavItem>
        </ul>
    )
    
    return (
        <header className={`py-4 fixed inset-x-0 top-0 z-50 ${isNavOpen && 'bg-gradient-to-b from-primary-light from-50% to-white md:to-primary-light dark:from-header-dark dark:to-header-dark' } bg-primary-light dark:bg-header-dark text-primary-dark dark:text-white`}>
            <div className="w-11/12 mx-auto flex justify-between items-center">
                <Link to="/">
                    <img className="w-28 hover:cursor-pointer" src={mintonLogo} alt="Minton Logo" />
                </Link>
                {/* NavToggle button */}
                <svg onClick={handleNavToggle} className="md:hidden w-7 mb-1 fill-white hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                <div className="hidden md:block">
                    {navList}
                </div>
            </div> 
            {/* NavList mobile */}
            <Collapse open={isNavOpen} className="md:hidden shadow-lg shadow-white/40 md:shadow-none">
                {navList}
            </Collapse>   
        </header>
    )
}