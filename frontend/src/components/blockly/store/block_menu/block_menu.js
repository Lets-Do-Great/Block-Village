import React, { useEffect, useState }  from 'react';
import BlockDetail from '../block_detail/block_detail';
import styles from './block_menu.module.css'

const BlockMenu = ({ addBillList, allBlocksInfo, category }) => {
  const [selectedCategory, setSelectedCategory] = useState([])
  let newSelectedCategory = []
  useEffect(() => { 
    allBlocksInfo[`${category}`].forEach(block => {
      if (!block.userHave) {
        newSelectedCategory.push(block)
      }
    });
    console.log(newSelectedCategory.length);
    setSelectedCategory(newSelectedCategory)
  }, [allBlocksInfo, category]);
  

  return (
    // <selectedCategory.length()>
      <div className={styles.body}>
        {
          selectedCategory.length
          ? (
              selectedCategory.map((block) => (
                block.userHave ||
                <BlockDetail 
                  key={block.id} 
                  block={block} 
                  addBillList={addBillList}
                />
              ))
            )
          : 
            (
              <div className={styles.nothing_body}>
                <div className={styles.nothing_container}></div>
              </div>
            )
        }
      </div>
  )
};

export default BlockMenu;