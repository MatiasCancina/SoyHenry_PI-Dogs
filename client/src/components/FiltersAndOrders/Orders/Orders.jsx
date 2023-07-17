import { useDispatch } from "react-redux"
import { orderByName, orderByWeight } from "../../../redux/actions";
import useFiltersState from "../../../utils/customHooks/useFiltersState";

const Orders = () => {
    const { value, setValue } = useFiltersState()
    // const { name, weight, } = value

    const dispatch = useDispatch();

    const handleOrders = (e) => {
        if (e.target.value === "A-Z" || e.target.value === "Z-A") {
            dispatch(orderByName(e.target.value));
            setValue({ ...value, name: e.target.value, weight: 'original' })
        }

        if (e.target.value === "heavier" || e.target.value === "lighter") {
            dispatch(orderByWeight(e.target.value));
            setValue({ ...value, weight: e.target.value, name: 'original' })
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