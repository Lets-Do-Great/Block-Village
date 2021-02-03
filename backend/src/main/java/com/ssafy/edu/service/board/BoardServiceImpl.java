package com.ssafy.edu.service.board;

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
import java.util.stream.Collectors;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private UserJpaRepository userJpaRepository;

    @Autowired
    private BoardJpaRepository boardJpaRepository;

    @Autowired
    private BoardCommentJpaRepository boardCommentJpaRepository;

//    @Autowired
//    private BoardLikeUsersJpaRepository boardLikeUsersJpaRepository;

    @Override
    public ResponseEntity<BoardResponse> getBoardList() {

        BoardResponse result = new BoardResponse();

        List<Board> boardList = boardJpaRepository.findAll();
        
        if(boardList.get(0)!=null){
            System.out.println("boardList는 널아님");
        }
        
        List<BoardResult> resultList = boardList.stream().map(boardEntity -> {
            BoardResult boardResult = new BoardResult();
            boardResult.setId(boardEntity.getId());
            boardResult.setTitle(boardEntity.getTitle());
            boardResult.setContent(boardEntity.getContent());
            boardResult.setWriter(boardEntity.getUser().getNickname());
            if(boardEntity.getUser()!=null){
                System.out.println("이새기 널아님");
                System.out.println(boardEntity.getUser().getNickname());
            }else{
                System.out.println("이새기 널임");
            }
            return boardResult;
        }).collect(Collectors.toList());

//        List<BoardResult> resultList = new ArrayList<>();
//        for(Board br : boardList){
//            BoardResult boardResult = new BoardResult();
//            boardResult.setId(br.getId());
//            boardResult.setTitle(br.getTitle());
//            boardResult.setContent(br.getContent());
//            boardResult.setWriter(br.getUser().getNickname());
//            System.out.println("br.getUser().toString() = " + br.getUser().toString());
//        resultList.add(boardResult);
//        }
        
//        if(resultList.get(0)!=null){
//            System.out.println("resultList 널아님");
//        }
        
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
                if(boardEntity.getCreatedDate()!=null) {
                    boardResult.setCreatedDate(boardEntity.getCreatedDate());
                }
                if(boardEntity.getModifiedDate()!=null){
                    boardResult.setUpdatedDate(boardEntity.getModifiedDate());
                }
                return boardResult;
            }).get();

            List<BoardCommentResponse> bCommentList = new ArrayList<>();
            for(BoardComment b : board.get().getBoardCommentList()){
                BoardCommentResponse bc = BoardCommentResponse.builder()
                        .content(b.getContent())
                        .nickname(b.getUser().getNickname())
                        .build();
                bCommentList.add(bc);
            }
            bResult.setBoardCommentList(bCommentList);

            result.status = true;
            result.data = bResult;
            return new ResponseEntity<>(result, HttpStatus.OK);

        }else {
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

    }

    @Override
    public ResponseEntity<BoardResponse> insertBoard(BoardRequest boardInsertRequest) {

        BoardResponse result = new BoardResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(boardInsertRequest.getEmail());

        if(userOptional.isPresent()){
            Board board = Board.builder()
                    .title(boardInsertRequest.getTitle())
                    .content(boardInsertRequest.getContent())
                    .user(userOptional.get())
                    .views(0L)
                    .build();

            Board save = boardJpaRepository.save(board);
        }else {
            result.status = false;
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        }

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @Override
    public ResponseEntity<BoardResponse> updateBoard(Long id, BoardUpdateRequest boardUpdateRequest) {

        BoardResponse result = new BoardResponse();
        Optional<Board> boardOptional = boardJpaRepository.findById(id);

        if(boardOptional.isPresent()){
            Board board = boardOptional.get();
            board.setId(id);
            board.setTitle(boardUpdateRequest.getTitle());
            board.setContent(boardUpdateRequest.getContent());
            boardJpaRepository.save(board);

            result.status = true;
            return new ResponseEntity<>(result, HttpStatus.OK);
        }

        result.status = false;
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
    }

    @Override
    public ResponseEntity<BoardResponse> deleteBoard(Long id) {

        BoardResponse result = new BoardResponse();
        Optional<Board> boardOptional = boardJpaRepository.findById(id);

//        boardLikeUsersJpaRepository.deleteAllByBoard(boardOptional.get());
        boardCommentJpaRepository.deleteAllByBoard(boardOptional.get());
        boardJpaRepository.deleteById(id);

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    @Override
    public ResponseEntity<BoardResponse> likeBoard(Long id, String email) {

        BoardResponse result = new BoardResponse();

        Optional<Board> boardOpt = boardJpaRepository.findById(id);
        Optional<User> userOpt = userJpaRepository.findByEmail(email);

//        Optional<BoardLikeUsers> likeUsersOptional = boardLikeUsersJpaRepository.findByBoardAndUser(boardOpt.get(), userOpt.get());
//        if(likeUsersOptional.isPresent()){
//            boardLikeUsersJpaRepository.delete(likeUsersOptional.get());
//        }else {
//            BoardLikeUsers boardLikeUsers = new BoardLikeUsers();
//            boardLikeUsers.setBoard(boardOpt.get());
//            boardLikeUsers.setUser(userOpt.get());
//            boardLikeUsersJpaRepository.save(boardLikeUsers);
//        }

        result.status = true;
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
