import React from 'react';
import BlockDetail from '../block_detail/block_detail';
import styles from './block_menu.module.css'

const BlockMenu = (props) => {
  return (
    <div className={styles.body}>
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
      <BlockDetail />
    </div>
  )
};

export default BlockMenu;