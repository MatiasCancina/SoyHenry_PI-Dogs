import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/create')
    } 
    
    return (
        <div className={style.navbarContainer}>
            <NavLink className={style.navLink} to='/home'>Good Boys</NavLink>
            {location.pathname !== '/create' && <button onClick={navigateHandler} className={style.creatorDogBtn}>Dog Creator</button>}
            {location.pathname === '/home' && <SearchBar />}
        </div>
    )
}

export default NavBar;