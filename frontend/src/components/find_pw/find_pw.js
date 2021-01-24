import React from 'react';
import FindPWForm from './find_pw_form';

const FindPW = ({ onChangeFindFW, findPW, findPWInput }) => {

    return (
    <>
        <button>뒤로가기</button><br/>
        <FindPWForm
            onChangeFindFW={onChangeFindFW}
            findPW={findPW}
            findPWInput={findPWInput}
        />
    </>
    );
}

export default FindPW;