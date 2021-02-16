import React, { useEffect, useState }  from 'react';
import BlockDetail from '../block_detail/block_detail';
import styles from './block_menu.module.css'

const BlockMenu = ({ addBillList, allBlocksInfo, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(allBlocksInfo[`${category}`])
  
  useEffect(() => { 
    setSelectedCategory(allBlocksInfo[`${category}`]);
  }, [allBlocksInfo, category]);

  return (
    // <selectedCategory.length()>
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