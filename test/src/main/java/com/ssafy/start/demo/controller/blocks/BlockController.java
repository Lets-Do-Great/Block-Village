package com.ssafy.start.demo.controller.blocks;

import com.ssafy.start.demo.model.BlockResponse;
import com.ssafy.start.demo.model.UserResponse;
import com.ssafy.start.demo.model.blocks.Blocks;
import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.service.blocks.BlocksService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = BlockResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BlockResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BlockResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BlockResponse.class)})
@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
public class BlockController {
    @Autowired
    BlocksService blocksService;

    @GetMapping("blocks")
    @ApiOperation(value = "블록 검색")
    public Object getUserBlock() {
        List<Blocks> blockList = blocksService.findByUsersId(101L);
        
//        for(Blocks b : blockList){
//            System.out.println("b.getId() = " + b.getId());
//        }
        ResponseEntity response = null;
        if (blockList.size()>0) { //응답 만들어주는 비지니스 로직
            final BlockResponse result = new BlockResponse();
            result.status = true;
            result.data = blockList;
            result.purpose = "findAll";
            response = new ResponseEntity<>(result, HttpStatus.OK); //성공
        } else {
            response = new ResponseEntity<>(null, HttpStatus.NOT_FOUND);//실패
        }
        return response;
    }
}
