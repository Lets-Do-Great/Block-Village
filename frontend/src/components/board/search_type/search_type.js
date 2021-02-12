import React from 'react';
import styles from './search_type.module.css';

// select로 바꾸기
const SearchType = ({ onChangeSortType }) => {
    return (
        <select name="sortType" className={styles.select} onChange={onChangeSortType}>
            <option 
                className={styles.option}
                value="createdDate,desc">최신순</option>
            <option 
                className={styles.option}
                value="createdDate">오래된순</option>
        </select>
    );
}

export default SearchType;