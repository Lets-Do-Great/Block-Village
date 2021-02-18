import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './my_challenge_list.module.css'

const MyChallengeList = ({ category, challenge }) => {  
    const history = useHistory();
    const list = useRef();
    const { title, image, finish } = challenge;

    useEffect(() => {
        if(category === 'todo'){
            list.current.className=styles.list_todo;
        }else{
            list.current.className=styles.list_done;
        }
    }, []);

    const goToAnswer = () => {
        if(category === 'todo' && !finish){
            history.push(`/main/create/answer/challenge_test`);
        }
    }

    return (
    <div ref={list} onClick={goToAnswer}>
        <div className={styles.title}>{ title }</div>
        <img
            className={styles.image} 
            src={image} />
    </div>);   
}

export default MyChallengeList;