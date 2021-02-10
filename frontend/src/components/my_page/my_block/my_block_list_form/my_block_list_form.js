import React from 'react';
import BlockDetail from '../../../blockly/store/block_detail/block_detail';
import styles from './my_block_list_form.module.css';

const MyBlockListForm = ({ categoryBlockList }) => {
    return (
    <>
        <div className={styles.box}/>
        { categoryBlockList.length === 0
        ? <div className={styles.text}>아직 블록이 없어요</div>
        : <div className={styles.my_block_list_form}>
            { categoryBlockList.map(block => (
                <BlockDetail
                    key={block.id}
                    id={block.id}
                    name={block.name}
                    image={block.image}
                />
            ))}
        </div>
        }
    </>
    );
}

export default MyBlockListForm;