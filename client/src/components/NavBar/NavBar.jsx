import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    
    return (
        <div className={style.navbarContainer}>
            <NavLink className={style.navLink} to='/home'>Happy Paws</NavLink>
            {location.pathname === '/home' && <SearchBar />}
        </div>
    )
}

export default NavBar;