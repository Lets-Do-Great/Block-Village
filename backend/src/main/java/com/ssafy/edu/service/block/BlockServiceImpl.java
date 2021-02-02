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
import java.util.stream.Collectors;

@Service
public class BlockServiceImpl implements BlockService{

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
        if(blockList.isPresent()) {
            List<BlockResult> resultList = blockList.stream().map(blockEntity -> {
                BlockResult blockResult = new BlockResult();
                blockResult.setId(blockEntity.getId());
                blockResult.setType(blockEntity.getType());
                blockResult.setTitle(blockEntity.getTitle());
                blockResult.setPrice(blockEntity.getPrice());
                return blockResult;
            }).get();
            result.status = true;
            result.data = resultList;
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else{
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }
    @Override
    public ResponseEntity<BlockResponse> getMyBlockList(BlockMyRequest getMyBlockRequest){
        BlockResponse result = new BlockResponse();

        Optional<BlockUsers> blockUsers = blockUsersJpaRepository.findByTypeAndEmail(getMyBlockRequest.getType(), getMyBlockRequest.getEmail());
        if(blockUsers.isPresent()) {
            result.data = blockUsers;
            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }
    }
}
