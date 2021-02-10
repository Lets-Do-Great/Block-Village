import React from 'react';
import styles from './my_info_form.module.css';
import { GrMoney } from "react-icons/gr";

const MyInfoLeft = ({ profile, mileage }) => {
    return (
    <div className={styles.my_info_left}>
        <div className={styles.profile_img}></div>
        <div className={styles.icons}>
            <div className={styles.icon}><GrMoney/></div>
            <div className={styles.text_mileage}>{mileage}</div>
        </div>
    </div>
    );
}

const MyInfoRight = ({ nickname, email, 
                    follower, following, introduction }) => {
    return (
    <div className={styles.my_info_right}>
        <div className={styles.text}>{ nickname }</div>
        <div className={styles.text}>{ email }</div>
        <div className={styles.text}>{ follower }</div>
        <div className={styles.text}>{ following }</div>
        <div className={styles.text_introduction}>{ introduction }</div>
    </div>
    );
}

const MyInfoForm = ({ userInfo }) => {
    const { profile, mileage, nickname, 
        email, follower, following, introduction } = userInfo;

    return (
    <div className={styles.my_info_form}>
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
    </div>    
    );
}

export default MyInfoForm;