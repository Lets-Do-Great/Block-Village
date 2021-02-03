package com.ssafy.edu.service.board;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.board.Board;
import com.ssafy.edu.model.board.BoardComment;
import com.ssafy.edu.model.board.BoardCommentRequest;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.BoardCommentJpaRepository;
import com.ssafy.edu.repository.BoardJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BoardCommentServiceImpl implements BoardCommentService{

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Autowired
    private BoardLikeUsersJpaRepository boardLikeUsersJpaRepository;

    @Autowired
    private BoardCommentJpaRepository boardCommentJpaRepository;

    @Override
    public ResponseEntity<BasicResponse> insertComment(Long id, BoardCommentRequest boardCommentRequest) {

        BasicResponse result = new BasicResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(boardCommentRequest.getEmail());
        Optional<Board> boardOptional = boardJpaRepository.findById(id);
        
        // BaseTimeEntity 먹히지않음
        if(userOptional.isPresent() && boardOptional.isPresent()){
            BoardComment boardComment = BoardComment.builder()
                    .content(boardCommentRequest.getContent())
                    .board(boardOptional.get())
                    .user(userOptional.get())
                    .build();

            boardCommentJpaRepository.save(boardComment);
        }else {
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @Override
    public ResponseEntity<BasicResponse> updateComment(Long id, Long cid, String content) {

        BasicResponse result = new BasicResponse();

        Optional<Board> boardOptional = boardJpaRepository.findById(id);
        Optional<BoardComment> commentOptional = boardCommentJpaRepository.findById(cid);

        if(commentOptional.isPresent()){
            BoardComment boardComment = commentOptional.get();
            boardComment.setContent(content);
            boardComment.setBoard(boardOptional.get());

            boardCommentJpaRepository.save(boardComment);

            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<BasicResponse> deleteComment(Long id, Long cid) {

        BasicResponse result = new BasicResponse();
        boardCommentJpaRepository.deleteById(cid);
        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

}
