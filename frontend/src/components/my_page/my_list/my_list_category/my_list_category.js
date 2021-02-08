import React from 'react';

const MyListCategory = ({ onChangeCategory }) => {
    return (<div>
        <button 
            onClick={onChangeCategory}
            value="myMission">내가 만든 미션</button>
        <button 
            onClick={onChangeCategory}
            value="makingAnswer">참여중인 미션</button>
        <button 
            onClick={onChangeCategory}
            value="myAnswer">내가 만든 답안</button>
    </div>);
}

export default MyListCategory;