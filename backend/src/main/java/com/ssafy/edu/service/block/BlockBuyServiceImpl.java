package com.ssafy.edu.service.block;


import com.ssafy.edu.model.block.Block;
import com.ssafy.edu.model.block.BlockBuyRequest;
import com.ssafy.edu.model.block.BlockResponse;
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
    public ResponseEntity<BlockResponse> buyBlock(BlockBuyRequest blockBuyRequest, String email){

        BlockResponse result = new BlockResponse();

        Optional<User> userOpt = userJpaRepository.findByEmail(email);

        for(Long id: blockBuyRequest.getBlockId()){
            Optional<Block> blockOpt = blockJpaRepository.findById(id);
            if(userOpt.isPresent() && blockOpt.isPresent()){
                Optional<BlockUsers> blockUsersOpt = blockUsersJpaRepository.findByUserAndBlock(userOpt.get(), blockOpt.get());
                BlockUsers blockUsers = new BlockUsers();
                if(blockUsersOpt.isPresent()){
                    blockUsers = blockUsersOpt.get();
                    blockUsers.setQuantity(blockUsersOpt.get().getQuantity()+1);

                }else if(blockUsersOpt.isEmpty()){
                     blockUsers = BlockUsers.builder()
                            .user(userOpt.get())
                            .block(blockOpt.get())
                            .quantity(1)
                            .build();
                }

                BlockUsers save = blockUsersJpaRepository.save(blockUsers);

            }else {
                result.status = false;
                return new ResponseEntity<>(result, HttpStatus.OK);
            }
        }
        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
