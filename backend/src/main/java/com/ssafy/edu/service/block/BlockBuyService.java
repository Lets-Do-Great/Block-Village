package com.ssafy.edu.service.block;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.block.BlockBuyRequest;
import com.ssafy.edu.model.block.BlockResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BlockBuyService {
    public ResponseEntity<BlockResponse> buyBlock(BlockBuyRequest blockBuyRequest, String email);
}
