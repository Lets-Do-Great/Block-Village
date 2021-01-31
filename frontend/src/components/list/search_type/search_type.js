import React from 'react';

const SearchType = ({ onChangeSearchType }) => {
    return (<>
        <button 
            onClick={onChangeSearchType}
            value="new">NEW</button>
        <button
            onClick={onChangeSearchType}
            value="like">좋아요 순</button>
        <button 
            onClick={onChangeSearchType}
            value="people">참여 많은 순</button>
        <button 
            onClick={onChangeSearchType}
            value="difficulty">난이도 순</button>
    </>);
}

export default SearchType;