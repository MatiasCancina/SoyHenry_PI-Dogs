import React from 'react'
import style from './Pagination.module.css';

const Pagination = ({ count, totalPages, nextHandler, prevHandler, firstPageHandler, lastPageHandler }) => {

    return (
        <div className={style.paginationContainer}>

            <div className={style.arrowsContainer}>
                <button className={style.arrow} onClick={prevHandler}>
                    {"<"}
                </button>

                <h3>{count} of {totalPages}</h3>

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
        </div>
    )
}

export default Pagination