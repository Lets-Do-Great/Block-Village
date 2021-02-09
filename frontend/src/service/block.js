import client from './client';

// 모든 블럭 조회
export const getAllBlocks = ({ email }) => {
  return client({
    url: `blocks/${email}`,
    method: 'get',
  });
};

// 내 블럭 불러오기
export const getMyBlocks = ({ email }) => {
  // console.log(client.defaults);
  return client({
    url: `blocks/myblocks/${email}`,
    method: 'get',
  });
};

// 내 블럭 추가하기
export const buyBlocks = ({ email, blockId }) => {
  return client({
    url: `blocks/buy/${email}`,
    method: 'post',
    data: { blockId },
  });
};