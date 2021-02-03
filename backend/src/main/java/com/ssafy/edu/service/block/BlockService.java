package com.ssafy.edu.service.block;

import com.ssafy.edu.model.block.*;
import org.springframework.http.ResponseEntity;

public interface BlockService {
    public ResponseEntity<BlockResponse> getBlockList();
    public ResponseEntity<BlockResponse> getMyBlockList(String email, String category);
}
