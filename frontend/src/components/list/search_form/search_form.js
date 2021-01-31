import React from 'react';

const SearchForm = ({ onChangeSearch, onClickEnter, search }) => {
    return (<>
        <select onChange={onChangeSearch}>
            <option name="keywordType" value="title">제목</option>
            <option name="keywordType" value="user">만든 이</option>
        </select>
        <input
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