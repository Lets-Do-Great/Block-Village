package com.ssafy.edu.service.block;


import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.block.Block;
import com.ssafy.edu.model.block.BlockBuyRequest;
import com.ssafy.edu.model.block.BlockUsers;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.BlockJpaRepository;
import com.ssafy.edu.repository.BlockUsersJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlockBuyServiceImpl implements BlockBuyService{
    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private BlockJpaRepository blockJpaRepository;

    @Autowired
    private BlockUsersJpaRepository blockUsersJpaRepository;

    @Override
    public ResponseEntity<BasicResponse> buyBlock(BlockBuyRequest blockBuyRequest){
        BasicResponse result = new BasicResponse();

        Optional<User> userOpt = userJpaRepository.findByEmail(blockBuyRequest.getEmail());
        for(Long id: blockBuyRequest.getBlockId()){
            Optional<Block> blockOpt = blockJpaRepository.findById(id);
            if(userOpt.isPresent() && blockOpt.isPresent()){
                BlockUsers blockUsers = BlockUsers.builder()
                        .email(blockBuyRequest.getEmail())
                        .block(blockBuyRequest.getBlockId())
                        .quantity();
                BlockUsers save = blockUsersJpaRepository.save(blockUsers);
            }else {
                result.status = false;
                return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
            }
        }
        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
