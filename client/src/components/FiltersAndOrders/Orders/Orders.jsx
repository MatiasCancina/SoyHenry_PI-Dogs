import { useDispatch } from "react-redux"
import { orderByName, orderByWeight } from "../../../redux/actions";
import useFiltersState from "../../../utils/customHooks/useFiltersState";

const Orders = () => {
    const { value, setValue } = useFiltersState()
    const { name, weight, } = value

    const dispatch = useDispatch();

    const handleOrderByName = (e) => {
        dispatch(orderByName(e.target.value));
        setValue({ ...value, name: e.target.value, weight: 'original' })
    }

    const handleOrderByWeight = (e) => {
        dispatch(orderByWeight(e.target.value));
        setValue({ ...value, weight: e.target.value, name: 'original' })
    }

    return (
        <div>
            <select value={name} onChange={handleOrderByName}>
                <option disabled value="original">A-Z</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>

            <select value={weight} onChange={handleOrderByWeight}>
                <option disabled value="original">WEIGHT</option>
                <option value="heavier">HEAVIER</option>
                <option value="lighter">LIGHTER</option>
            </select>
        </div>
    )
}

export default Orders