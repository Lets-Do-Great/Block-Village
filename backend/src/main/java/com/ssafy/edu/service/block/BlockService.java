package com.ssafy.edu.service.block;

import com.ssafy.edu.model.block.*;
import org.springframework.http.ResponseEntity;

public interface BlockService {
    public ResponseEntity<BlockResponse> getBlockList(String email);
    public ResponseEntity<BlockResponse> getMyBlockList(String email);
    public ResponseEntity<BlockResponse> signUpBlocks(BlocksignUpTest blocksignUpTest);
}
