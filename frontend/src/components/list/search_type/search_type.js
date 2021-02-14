import React from 'react';
import styles from './search_type.module.css';

const SearchType = ({ searchType, onChangeSearchType }) => {
    return (
    <div className={styles.tab_menus}>
        <ul className={styles.tabs}>
            <li 
                onClick={onChangeSearchType}
                name="searchType"
                value="updatedAt"
                className={searchType === 'updatedAt' ? styles.current : ''}>NEW</li>
            <li
                onClick={onChangeSearchType}
                name="searchType"
                value="favorite"
                className={searchType === 'favorite' ? styles.current : ''}>좋아요 순</li>
            <li 
                onClick={onChangeSearchType}
                name="searchType"
                value="people"
                className={searchType === 'people' ? styles.current : ''}>참여 많은 순</li>
            <li 
                onClick={onChangeSearchType}
                name="searchType"
                value="difficulty"
                className={searchType === 'difficulty' ? styles.current : ''}>난이도 순</li>
        </ul>
    </div>);
}

export default SearchType;