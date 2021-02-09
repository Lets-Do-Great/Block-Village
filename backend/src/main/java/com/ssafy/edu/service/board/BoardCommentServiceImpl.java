package com.ssafy.edu.service.board;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.board.*;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.BoardCommentJpaRepository;
import com.ssafy.edu.repository.BoardJpaRepository;
import com.ssafy.edu.repository.UserJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BoardCommentServiceImpl implements BoardCommentService{

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Autowired
    private BoardCommentJpaRepository boardCommentJpaRepository;

    /* 댓글 작성 */
    @Override
    public ResponseEntity<BasicResponse> insertComment(Long id, BoardCommentRequest boardCommentRequest) {

        BasicResponse result = new BasicResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(boardCommentRequest.getEmail());
        Optional<Board> boardOptional = boardJpaRepository.findById(id);
        
        if(userOptional.isPresent() && boardOptional.isPresent()){

            BoardComment boardComment = BoardComment.builder()
                    .content(boardCommentRequest.getContent())
                    .board(boardOptional.get())
                    .user(userOptional.get())
                    .build();

            boardCommentJpaRepository.save(boardComment);

            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);

        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    /* 댓글 수정 */
    @Override
    public ResponseEntity<BasicResponse> updateComment(Long id, Long cid, String content) {

        BasicResponse result = new BasicResponse();

        Optional<Board> boardOptional = boardJpaRepository.findById(id);
        Optional<BoardComment> commentOptional = boardCommentJpaRepository.findById(cid);

        // commentId와 boardId가 같이 없는 경우,

        if(boardOptional.isPresent() && commentOptional.isPresent()
                && commentOptional.get().getBoard() == boardOptional.get()){

            BoardComment boardComment = commentOptional.get();
            boardComment.setContent(content);

            boardCommentJpaRepository.save(boardComment);

            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /* 댓글 삭제 */
    @Override
    public ResponseEntity<BasicResponse> deleteComment(Long id, Long cid) {

        BasicResponse result = new BasicResponse();
        Optional<Board> boardOptional = boardJpaRepository.findById(id);
        Optional<BoardComment> commentOptional = boardCommentJpaRepository.findById(cid);

        if(boardOptional.isPresent() && commentOptional.isPresent()
            && boardOptional.get() == commentOptional.get().getBoard()){

            boardCommentJpaRepository.deleteById(cid);

            if(!boardCommentJpaRepository.findById(cid).isPresent()){
                result.status = true;
                return new ResponseEntity<>(result, HttpStatus.OK);
            }
        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    /* 특정 공지사항 댓글들 불러오기 */
    @Override
    public ResponseEntity<BoardBasicResponse> getCommentList(Long id) {

        BoardBasicResponse result = new BoardBasicResponse();
        Optional<Board> boardOptional = boardJpaRepository.findById(id);

        if(boardOptional.isPresent()){

            List<BoardCommentResponse> bCommentList = new ArrayList<>();
            Board board = boardOptional.get();

            for(BoardComment c : board.getBoardCommentList()){
                BoardCommentResponse bc = BoardCommentResponse.builder()
                        .commentId(c.getCommentId())
                        .content(c.getContent())
                        .email(c.getUser().getEmail())
                        .nickname(c.getUser().getNickname())
                        .createdAt(c.getCreatedDate())
                        .updatedAt(c.getModifiedDate())
                        .build();
                bCommentList.add(bc);
            }

            result.status = true;
            result.data = bCommentList;
            return new ResponseEntity(result, HttpStatus.OK);

        }

        result.status = false;
        return new ResponseEntity(result, HttpStatus.OK);

    }

}
