import React from 'react';

const AgreeForm = ({ onChangeAgree }) => {

    const onClick = () => {
        // 모두 체크 되어있는지 확인하고

        onChangeAgree();
    };

    return (
    <>  
        <h2>이 용 약 관</h2>
        <button onClick={onClick}> 동의하기 </button>
    </>
    );
}

export default AgreeForm;