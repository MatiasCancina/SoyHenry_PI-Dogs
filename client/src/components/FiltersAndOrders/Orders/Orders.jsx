import { useDispatch } from "react-redux"
import { orderByName, orderByWeight } from "../../../redux/actions";

const Orders = () => {

    const dispatch = useDispatch();

    const handleOrders = (e) => {
        if (e.target.value === "A-Z" || e.target.value === "Z-A") {
            dispatch(orderByName(e.target.value));
        }

        if (e.target.value === "heavier" || e.target.value === "lighter") {
            dispatch(orderByWeight(e.target.value));
        }
    }

    return (
        <div>
            <select  onChange={handleOrders}>
                <option disabled selected value="">ORDERS</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="heavier">HEAVIER</option>
                <option value="lighter">LIGHTER</option>
            </select>
        </div>
    )
}

export default Orders