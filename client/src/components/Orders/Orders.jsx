import { useDispatch } from "react-redux"
import { orderByName } from "../../redux/actions";

const Orders = () => {
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderByName(e.target.value));
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option disabled selected value="">ORDER</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )
}

export default Orders