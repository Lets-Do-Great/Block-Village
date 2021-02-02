package com.ssafy.edu.service.board;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.board.BoardCommentRequest;
import org.springframework.http.ResponseEntity;

public interface BoardCommentService {
    public ResponseEntity<BasicResponse> insertComment(Long id, BoardCommentRequest boardCommentRequest);
    public ResponseEntity<BasicResponse> updateComment(Long id, Long cid, String content);
    public ResponseEntity<BasicResponse> deleteComment(Long id, Long cid);
}
