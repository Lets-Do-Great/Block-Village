import React from 'react';

const MyInfoLeft = ({ profile, mileage }) => {
    return (
    <>
        <img src={profile} alt="프로필 이미지"/>
        <p>{mileage}</p>
    </>
    );
}

const MyInfoRight = ({ nickname, email, 
                    follower, following, introduction }) => {
    return (
    <>
        <p>{ nickname }</p>
        <p>{ email }</p>
        <p>{ follower }</p>
        <p>{ following }</p>
        <p>{ introduction }</p>
    </>
    );
}

const MyInfoForm = ({ userInfo }) => {
    const { profile, mileage, nickname, 
        email, follower, following, introduction } = userInfo;

    return (
    <>
        <MyInfoLeft
            profile={profile}
            mileage={mileage}
        />
        <MyInfoRight
            nickname={nickname}
            email={email}
            follower={follower}
            following={following}
            introduction={introduction}
        />        
    </>    
    );
}

export default MyInfoForm;