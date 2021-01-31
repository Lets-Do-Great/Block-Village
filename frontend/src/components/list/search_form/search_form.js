import React from 'react';
import styles from './search_form.module.css';

const SearchForm = ({ onChangeSearch, onClickEnter, search }) => {
    return (<>
        <select className={styles.select} onChange={onChangeSearch}>
            <option 
                className={styles.option}
                name="keywordType" 
                value="title">제목</option>
            <option 
                className={styles.option}
                name="keywordType" 
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
    </>);
}

export default SearchForm;