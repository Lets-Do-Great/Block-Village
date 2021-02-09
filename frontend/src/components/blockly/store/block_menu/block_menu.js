import React from 'react';
import BlockDetail from '../block_detail/block_detail';
import styles from './block_menu.module.css'

const BlockMenu = ({ selectedCategory, addBillList }) => {
  console.log(selectedCategory);
  return (
    <div className={styles.body}>
      {
        selectedCategory.map((block) => (
          block.userHave ||
          <BlockDetail 
            key={block.id} 
            block={block} 
            addBillList={addBillList}
          />
        ))
      }
      
    </div>
  )
};

export default BlockMenu;