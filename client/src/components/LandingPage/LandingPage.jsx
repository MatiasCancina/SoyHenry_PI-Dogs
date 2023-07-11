import { useNavigate } from "react-router-dom";
import style from './LandingPage.module.css';

const LandingPage = () => {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('/home');
    }

    return (
        <div className={style.landingContainer}>
            <button className={style.btn} onClick={navigateHandler}>ENTER</button>
        </div>
    )
}

export default LandingPage;