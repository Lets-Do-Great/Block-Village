import React from 'react';
import MyBlockDetail from '../my_block_detail/my_block_detail';
import styles from './my_block_list_form.module.css';

const MyBlockListForm = ({ categoryBlockList }) => {
    return (
    <>
        <div className={styles.box}/>
        { categoryBlockList.length === 0
        ? <div className={styles.text}>아직 블록이 없어요</div>
        : <div className={styles.my_block_list_form}>
            <div className={styles.my_block_list_form_body}>
                { categoryBlockList.map(block => (
                    <MyBlockDetail
                        key={block.id}
                        id={block.id}
                        block={block}
                    />
                ))}
            </div>
        </div>
        }
    </>
    );
}

export default MyBlockListForm;