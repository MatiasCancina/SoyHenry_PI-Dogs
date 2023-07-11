import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const usePagination = () => {
    const CARDS_PER_PAGE = 8;

    const dogsState = useSelector(state => state.dogs);

    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(CARDS_PER_PAGE)
    const [count, setCount] = useState(1); //? para que haga el cambio de pagina

    let dogs = dogsState.slice(prev, next) //? para que muestre de 8 en 8    

    const totalPages = Math.ceil(dogsState.length / CARDS_PER_PAGE); //ty

    const nextHandler = () => {
        if (count < totalPages) {
            setNext(next + CARDS_PER_PAGE);
            setPrev(prev + CARDS_PER_PAGE);
            setCount(count + 1);
        }
    }

    const prevHandler = () => {
        if (count > 1) {
            if (prev - CARDS_PER_PAGE <= 0) {
                setPrev(0)
                setNext(CARDS_PER_PAGE)
            }
            else if (prev - 12 >= 0) {
                setPrev(prev - CARDS_PER_PAGE)
                setNext(next - CARDS_PER_PAGE)
            }
            setCount(count - 1)
        }
    }

    const firstPageHandler = () => {
        setPrev(0);
        setNext(CARDS_PER_PAGE);
        setCount(1);
    }

    const lastPageHandler = () => {
        setPrev((totalPages - 1) * CARDS_PER_PAGE);
        setNext(totalPages * CARDS_PER_PAGE);
        setCount(totalPages);   //? queda en la ultima pagina
    };

    useEffect(() => {
        firstPageHandler()
    }, [dogsState.length])

    return { nextHandler, prevHandler, firstPageHandler, lastPageHandler, totalPages, count, dogs }
}