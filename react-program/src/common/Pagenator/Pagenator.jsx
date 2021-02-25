import React from 'react';
import classes from "./pagenator.module.css";


let Pagenator = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
                {pages.map(p => {
                    return <span className={currentPage === p && classes.selectedPage}
                                 onClick={(e) => {
                                     onPageChange(p)
                                 }}>{p}</span>
                })}
            </div>
};

export default Pagenator;