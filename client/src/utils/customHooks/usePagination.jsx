import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const usePagination = () => {
    const CARDS_PER_PAGE = 8;

    const dogsState = useSelector(state => state.dogs);

    const [prev, setPrev] = useState(0)
    const [next, setNext] = useState(CARDS_PER_PAGE)
    const [count, setCount] = useState(1); //? para que haga el cambio de pagina

    let dogs = dogsState.slice(prev, next) //? para mostrar de 8 en 8    

    const totalPages = Math.ceil(dogsState.length / CARDS_PER_PAGE); //total de paginas que va a tener mi SPA

    const nextHandler = () => {
        if (count < totalPages) {
            setNext(next + CARDS_PER_PAGE); //? aumenta el valor de next para mostrar la siguiente pag
            setPrev(prev + CARDS_PER_PAGE); //? Aumenta el valor de 'prev' para mantener la coherencia de los perros mostrados en la página.
            setCount(count + 1);    //? Aumentamos el valor de 'count' para indicar la página actual.
        }
    }

    const prevHandler = () => {
        if (count > 1) {
            if (prev - CARDS_PER_PAGE <= 0) {   //esta verificacion es para cuando estemos en la primera pagina
                setPrev(0)  //? para que no se pueda seguir yendo para atras 
                setNext(CARDS_PER_PAGE) //? para mostrar los perros de la primer pag 
            }
            else if (prev - 12 >= 0) {  //esta verificacion es para cuando NO estemos en la primera pagina
                setPrev(prev - CARDS_PER_PAGE)  //? se reduce prev para saber si se puede seguir yendo para atras
                setNext(next - CARDS_PER_PAGE)  //? Aumentamos el valor de 'count' para indicar la página actual.
            }
            setCount(count - 1) //? se reduce el valor de count para indicar la nueav pagina actual
        }
    }

    const firstPageHandler = () => {
        setPrev(0);                 //? se establece el valor de prev en 0 para mostrar la primera pag
        setNext(CARDS_PER_PAGE);    //? se establece el valor de 'next' en el número de perros por pág para mostrar los perros de la primera pág
        setCount(1);
    }

    const lastPageHandler = () => {
        setPrev((totalPages - 1) * CARDS_PER_PAGE); //? Establece el valor de 'prev' en el índice del primer perro de la última página
        setNext(totalPages * CARDS_PER_PAGE);   //? Establece que al navegar a la última página, se muestren los perros desde el índice correcto en la interfaz de usuario 
        setCount(totalPages);   //? indica que esta en la ultima pagina
    };

    useEffect(() => {   //? cada vez que la longitud de 'dogsState' cambia, irá a la primera página automáticamente
        firstPageHandler()
    }, [dogsState.length])

    return { nextHandler, prevHandler, firstPageHandler, lastPageHandler, totalPages, count, dogs }
}