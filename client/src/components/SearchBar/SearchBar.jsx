import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getDogName } from '../../redux/actions';
import style from './SearchBar.module.css';

const SearchBar = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const searchByName = (e) => {
        e.preventDefault();
        
        dispatch(getDogName(name))
    }

    return (
        <form onSubmit={searchByName}>
            <input
                type='search'
                value={name}
                placeholder="Search..."
                onChange={handleChange}
                
            />

        </form>
    )
}

export default SearchBar;