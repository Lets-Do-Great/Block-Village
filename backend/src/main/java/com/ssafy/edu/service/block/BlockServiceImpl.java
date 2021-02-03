package com.ssafy.edu.service.block;

import com.ssafy.edu.model.block.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.BlockJpaRepository;
import com.ssafy.edu.repository.BlockUsersJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlockServiceImpl implements BlockService {

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private BlockJpaRepository blockJpaRepository;

    @Autowired
    private BlockUsersJpaRepository blockUsersJpaRepository;

    @Override
    public ResponseEntity<BlockResponse> getBlockList() {

        BlockResponse result = new BlockResponse();
        List<Block> blockList = blockJpaRepository.findAll();

        BlockCategoryResult resultList = new BlockCategoryResult();

        if (!blockList.isEmpty()) {

            List<BlockResult> calculationList = new ArrayList<>();
            List<BlockResult> drawingList = new ArrayList<>();
            List<BlockResult> flowList = new ArrayList<>();
            List<BlockResult> functionList = new ArrayList<>();
            List<BlockResult> judgementList = new ArrayList<>();
            List<BlockResult> movementList = new ArrayList<>();
            List<BlockResult> startList = new ArrayList<>();

            for (Block b : blockList) {

                BlockResult blockResult = new BlockResult();

                switch (b.getCategory()) {
                    case "calculation":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        calculationList.add(blockResult);
                        break;
                    case "drawing":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        drawingList.add(blockResult);
                        break;
                    case "flow":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        flowList.add(blockResult);
                        break;
                    case "function":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        functionList.add(blockResult);
                        break;
                    case "judgement":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        judgementList.add(blockResult);
                        break;
                    case "movement":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        movementList.add(blockResult);
                        break;
                    case "start":
                        blockResult.setName(b.getName());
                        blockResult.setPrice(b.getPrice());
                        startList.add(blockResult);
                        break;
                }
            }
            resultList.setCalculation(calculationList);
            resultList.setDrawing(drawingList);
            resultList.setFlow(flowList);
            resultList.setFunction(functionList);
            resultList.setJudgement(judgementList);
            resultList.setMovement(movementList);
            resultList.setStart(startList);


            result.status = true;
            result.data = resultList;

        } else {
            result.status = false;
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /* 내가 소유한 블록 목록 조회 */
    @Override
    public ResponseEntity<BlockResponse> getMyBlockList(String email, String category) {

        BlockResponse result = new BlockResponse();

        // 테스트 요망
        Optional<User> userOpt = userJpaRepository.findByEmail(email);
        if (userOpt.isPresent()) {

            List<BlockUsers> blockUsersList = userOpt.get().getBlockUsersList();

            if (!blockUsersList.isEmpty()) {

                List<BlockMyResponse> blockMyResponses = new ArrayList<>();
                for (BlockUsers blockUsers : blockUsersList) {
                    if ((blockUsers.getBlock().getCategory()).equals(category)) {
                        BlockMyResponse blockMyResponse = BlockMyResponse.builder()
                                .blockId(blockUsers.getBlock().getId())
                                .name(blockUsers.getBlock().getName())
                                .quantity(blockUsers.getQuantity())
                                .build();
                        blockMyResponses.add(blockMyResponse);
                    }
                }

                result.status = true;
                result.data = blockMyResponses;
                return new ResponseEntity<>(result, HttpStatus.OK);
            }

        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @Override
    public ResponseEntity<BlockResponse> signUpBlocks(BlocksignUpTest blocksignUpTest) {
        BlockResponse result = new BlockResponse();

       Block block = new Block().builder()
               .category(blocksignUpTest.getCategory())
               .name(blocksignUpTest.getName())
               .price(blocksignUpTest.getPrice())
               .build();
       Block blockResult =  blockJpaRepository.save(block);

        result.status = true;
        result.data = blockResult;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
