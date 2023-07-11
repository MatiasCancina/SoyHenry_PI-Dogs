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
        e.preventDefault(); //evita que se refreshee la pag

        dispatch(getDogName(name))
        setName("");    //vacia el input despues de la busqueda
    }

    return (
        <form onSubmit={searchByName} className={style.searchbarCotainer}>
            <input
                type='search'
                value={name}
                placeholder="Search...                      🔍︎"
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchBar;