import React from 'react';
import styles from './board_list.module.css';

const Board = ({ id, title, createdAt, views, getDetail, detail, userInfo, setOpenDetail, selectedBoard }) => {

    const onClick = () => {
        getDetail(id);
        setOpenDetail(!detail);
    }

    const created = createdAt.split("T");

    return (
        <div className={styles.board_body}>
            <div className={styles.board_no}>
                { id }</div>
            <div 
                className={styles.board_title}
                onClick={onClick}>
                {title}</div>
            <div 
                className={styles.board_date}>
                { created[0] }</div>
            <div
                className={styles.board_read_cnt}>
                { views }</div>
        </div>
    )
};

const BoardList = ({ list, userInfo, detail, getDetail, setOpenDetail, selectedBoard }) => {

    return (
    <div className={styles.board_list}>
        <div>
            <div className={styles.board_header}>
                <div className={styles.board_header_no}>글 번호</div>
                <div className={styles.board_header_title}>제목</div>
                <div className={styles.board_header_date}>작성 날짜</div>
                <div className={styles.board_header_read_cnt}>조회 수</div>
            </div>
            <div className={styles.board_list_body}>
                { list.map( board => (
                    <Board
                        id={board.boardId}
                        key={board.boardId}
                        title={board.title}
                        createdAt={board.createdAt}
                        views={board.views}
                        getDetail={getDetail}
                        detail={detail}
                        selectedBoard={selectedBoard}
                        userInfo={userInfo}
                        setOpenDetail={setOpenDetail}
                    />
                ))}

            </div>
        </div>
    </div>)};

export default BoardList;