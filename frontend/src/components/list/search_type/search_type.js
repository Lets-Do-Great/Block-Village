import React from 'react';
import styles from './search_type.module.css';

const SearchType = ({ onChangeSearchType }) => {
    return (<div className={styles.typeForm}>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="updatedAt">NEW</button>
        <button
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="favorite">좋아요 순</button>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="people">참여 많은 순</button>
        <button 
            className={styles.button}
            onClick={onChangeSearchType}
            name="searchType"
            value="difficulty">난이도 순</button>
    </div>);
}

export default SearchType;