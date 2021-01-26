package com.ssafy.edu.service.board;

import com.ssafy.edu.model.board.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.BoardJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Override
    public ResponseEntity<BoardResponse> getBoardList() {

        BoardResponse result = new BoardResponse();

        List<Board> boardList = boardJpaRepository.findAll();

        List<BoardResult> resultList = boardList.stream().map(boardEntity -> {
            BoardResult boardResult = new BoardResult();
            boardResult.setId(boardEntity.getId());
            boardResult.setTitle(boardEntity.getTitle());
            boardResult.setContent(boardEntity.getContent());
            boardResult.setWriter(boardEntity.getUser().getNickname());
            // createdAt, updatedAt
            return boardResult;
        }).collect(Collectors.toList());

        result.status = true;
        result.data = resultList;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }


    @Override
    public ResponseEntity<BoardResponse> getBoard(Long id) {

        BoardResponse result = new BoardResponse();

        Optional<Board> board = boardJpaRepository.findById(id);

        if(board.isPresent()){

            BoardResult bResult = board.map(boardEntity -> {
                BoardResult boardResult = new BoardResult();
                boardResult.setId(boardEntity.getId());
                boardResult.setTitle(boardEntity.getTitle());
                boardResult.setContent(boardEntity.getContent());
                boardResult.setWriter(boardEntity.getUser().getNickname());
                return boardResult;
            }).get();

            result.status = true;
            result.data = bResult;
            return new ResponseEntity<>(result, HttpStatus.OK);

        }else {
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

    }

    @Override
    public ResponseEntity<BoardResponse> insertBoard(String email, BoardInsertRequest boardInsertRequest) {

        BoardResponse result = new BoardResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(email);

        if(userOptional.isPresent()){
            Board board = Board.builder()
                    .title(boardInsertRequest.getTitle())
                    .content(boardInsertRequest.getContent())
                    .user(userOptional.get())
                    .createdAt(LocalDate.now())
                    .build();

            Board save = boardJpaRepository.save(board);
        }else {
            // 작성 권한이 없음 or 유저 테이블에 존재하지 않는 사람
        }

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @Override
    public ResponseEntity<BoardResponse> updateBoard(Long id, BoardUpdateRequest boardUpdateRequest) {

        BoardResponse result = new BoardResponse();

        Optional<Board> board = boardJpaRepository.findById(id);

        board.ifPresent(boardEntity -> {
            boardEntity.setTitle(boardUpdateRequest.getTitle());
            boardEntity.setContent(boardUpdateRequest.getContent());
            boardEntity.setUpdatedAt(LocalDate.now());
            boardJpaRepository.save(boardEntity);
        });

        // 없을 때 처리가 필요할 것 같다.

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<BoardResponse> deleteBoard(Long id) {

        BoardResponse result = new BoardResponse();

        boardJpaRepository.deleteById(id);

        // 없을 때 처리 필요할 것 같다.

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

}
