import React from 'react';
import Board from './board';
import styles from './board_list.module.css';

const BoardList = ({ list, userInfo, detail, getDetail, setOpenDetail, selectedBoard }) => {

    return (
        <div className={styles.body}>
            {/* <h3 onClick={() => { setDetail(!detail) }}>{userInfo}</h3>  */}
            { list.map(board =>(
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
    )
};

export default BoardList;