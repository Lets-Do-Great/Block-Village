import React from 'react';
import styles from './search_type.module.css';

// select로 바꾸기
const SearchType = ({ onChangeSearchType }) => {
    return (<div className={styles.typeForm}>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="createdDate,desc">최신순</button>
        <button
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="createdDate">오래된순</button>
    </div>);
}

export default SearchType;