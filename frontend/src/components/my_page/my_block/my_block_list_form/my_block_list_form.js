import React from 'react';
import BlockDetail from '../../../blockly/store/block_detail/block_detail';

const MyBlockListForm = ({ categoryBlockList }) => {
    return (
    <>
        { categoryBlockList.length === 0
        ? <div>아직 블록이 없어요 ㅠㅠ</div>
        : <>
            { categoryBlockList.map(block => (
                <BlockDetail
                    key={block.id}
                    id={block.id}
                    name={block.name}
                    image={block.image}
                />
            ))}
        </>
        }
    </>
    );
}

export default MyBlockListForm;