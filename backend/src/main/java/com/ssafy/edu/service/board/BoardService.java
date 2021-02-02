package com.ssafy.edu.service.board;

import com.ssafy.edu.model.board.*;
import org.springframework.http.ResponseEntity;

public interface BoardService {

    public ResponseEntity<BoardResponse> getBoardList();
    public ResponseEntity<BoardResponse> insertBoard(BoardRequest boardInsertRequest);
    public ResponseEntity<BoardResponse> getBoard(Long id);
    public ResponseEntity<BoardResponse> updateBoard(Long id, BoardUpdateRequest boardUpdateRequest);
    public ResponseEntity<BoardResponse> deleteBoard(Long id);
    public ResponseEntity<BoardResponse> likeBoard(Long id, String email);

}
