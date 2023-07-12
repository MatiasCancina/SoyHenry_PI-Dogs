import { useDispatch } from "react-redux"
import { orderByName, orderByWeight } from "../../../redux/actions";
import style from './Orders.module.css';

const Orders = () => {
    const dispatch = useDispatch();

    const handleOrderByName = (e) => {
        dispatch(orderByName(e.target.value));
    }

    const handleOrderByWeight = (e) => {
        dispatch(orderByWeight(e.target.value));
    }

    return (
        <div>
            <select onChange={handleOrderByName}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            <select onChange={handleOrderByWeight}>
            <option disabled selected value="">WEIGHT</option>
                <option value="heavier">HEAVIER</option>
                <option value="lighter">LIGHTER</option>
            </select>
        </div>
    )
}

export default Orders