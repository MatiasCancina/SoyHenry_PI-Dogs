import React from 'react'
import style from './Pagination.module.css';

const Pagination = ({ dogs, count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler }) => {    //traigo todo lo que voy a usar del hook de Pagination 

    return (
        <div className={style.paginationContainer}>
            {dogs ? (
                <>
                    <div className={style.arrowsContainer}>
                        <button className={style.arrow} onClick={prevHandler}>
                            {"<"}
                        </button>

                        <h3>{count} - {totalPages}</h3>

                        <button className={style.arrow} onClick={nextHandler}>
                            {">"}
                        </button>

                    </div>

                    <button onClick={firstPageHandler} className={style.firstBtn}>
                        {"FIRST"}
                    </button>
                    <button onClick={lastPageHandler} className={style.lastBtn}>
                        {"LAST"}
                    </button>
                </>
            )
                : null}
        </div>
    )
}

export default Pagination