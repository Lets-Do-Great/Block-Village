package com.ssafy.edu.service.board;

import com.ssafy.edu.model.board.Board;
import com.ssafy.edu.model.board.BoardInsertRequest;
import com.ssafy.edu.model.board.BoardResponse;
import com.ssafy.edu.model.board.BoardUpdateRequest;
import org.springframework.http.ResponseEntity;

public interface BoardService {

    public ResponseEntity<BoardResponse> getBoardList();
    public ResponseEntity<BoardResponse> insertBoard(String email, BoardInsertRequest boardInsertRequest);
    public ResponseEntity<BoardResponse> getBoard(Long id);
    public ResponseEntity<BoardResponse> updateBoard(Long id, BoardUpdateRequest boardUpdateRequest);
    public ResponseEntity<BoardResponse> deleteBoard(Long id);

}
