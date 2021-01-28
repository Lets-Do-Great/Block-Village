import React from 'react';
import FindPWForm from '../find_pw_form/find_pw_form';

const FindPW = ({ onChangeFindFW, findPW, findPWInput, setType }) => {
    const back = () =>{ setType('logIn') };

    return (
    <>
        <button onClick={back}>뒤로가기</button><br/>
        <FindPWForm
            onChangeFindFW={onChangeFindFW}
            findPW={findPW}
            findPWInput={findPWInput}
        />
    </>
    );
}

export default FindPW;