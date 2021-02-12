import React from 'react';
import styles from './search_form.module.css';

const SearchForm = ({ onChangeSearch, onChangeSortType, onClickEnter, search }) => {
    return (
    <div className={styles.search_form}>
        <select name="keywordType" className={styles.select} onChange={onChangeSortType}>
            <option 
                className={styles.option}
                value="title">제목</option>
            <option 
                className={styles.option}
                value="content">내용</option>
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
    </div>);
}

export default SearchForm;