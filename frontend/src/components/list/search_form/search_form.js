import React from 'react';
import styles from './search_form.module.css';

const SearchForm = ({ type, onChangeSearch, onChangeSearchType, onClickEnter, search }) => {
    return (<>

    { type === 'mission' && 
        <select name="sortType" className={styles.select_sort_type} onChange={onChangeSearchType}>
            <option value="decrease">높은 순</option>
            <option value="increase">낮은 순</option>
        </select>
    }

    <div className={styles.search_form}>
        <select name="keywordType" className={styles.select_search_form} onChange={onChangeSearchType}>
            <option 
                className={styles.option}
                value="title">제목</option>
            <option 
                className={styles.option}
                value="user">만든 이</option>
        </select>
        
        <input
            className={styles.input}
            type="text"
            name="keyword"
            value={search.keyword}
            onChange={onChangeSearch}
            onKeyDown={onClickEnter}
            placeholder="검색어를 입력하세요."
        />
    </div>
    </>);
}

export default SearchForm;