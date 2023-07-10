import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={style.navbarContainer}>
            <NavLink className={style.navLink} to='/home'>Happy Paws</NavLink>
            <SearchBar />
        </div>
    )
}

export default NavBar;