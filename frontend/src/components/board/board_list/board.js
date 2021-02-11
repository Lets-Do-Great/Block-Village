import React from 'react';
import styles from './board_list.module.css';

const Board = ({ id, title, createdAt, views, getDetail, detail, userInfo, setOpenDetail, selectedBoard }) => {

    const onClick = () => {
        getDetail(id);
        setOpenDetail(!detail);
    }

    return (
        <div className={styles.body}>
            <br />
            <div className={styles.board_no}>
                { id }</div>
            <div 
                className={styles.board_title}
                onClick={onClick}>
                {title}</div>
            <div 
                className={styles.board_date}>
                { createdAt }</div>
            <div
                className={styles.board_read_cnt}>
                { views }</div>
        </div>
    )
};

export default Board;