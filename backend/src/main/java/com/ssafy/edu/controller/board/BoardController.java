package com.ssafy.edu.controller.board;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.board.*;
import com.ssafy.edu.service.board.BoardCommentServiceImpl;
import com.ssafy.edu.service.board.BoardServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = BoardBasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BoardBasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BoardBasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BoardBasicResponse.class)})

@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("boards")
public class BoardController {

    @Autowired
    private BoardServiceImpl boardService;

    @Autowired
    private BoardCommentServiceImpl boardCommentService;

    @ApiOperation(value = "공지사항 전체 조회", notes = "데이터베이스에 저장된 모든 게시글을 불러옵니다.", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping
    public ResponseEntity<BoardBasicResponse> getBoardList(@PageableDefault(size=10, sort="createdDate") final Pageable pageable,
                                                           @RequestParam(value = "keywordType", required = false) String keywordType,
                                                           @RequestParam(value = "keyword", required = false) String keyword){
        if(keywordType!=null && keyword!=null){
            return boardService.getBoardList(pageable, keywordType, keyword);
        }
        return boardService.getBoardList(pageable);
    }

    @ApiOperation(value = "공지사항 조회", notes = "{boardId}번 게시글을 불러옵니다.", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{boardId}")
    public ResponseEntity<BoardBasicResponse> getBoard(@PathVariable("boardId") Long id){
        return boardService.getBoard(id);
    }

    @ApiOperation(value = "공지사항 등록", notes = "작성한 게시글이 데이터베이스에 저장됩니다.", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping
    public ResponseEntity<BoardBasicResponse> insertBoard(@RequestBody BoardRequest boardInsertRequest){
        return boardService.insertBoard(boardInsertRequest);
    }

    @ApiOperation(value = "공지사항 수정", notes = "{boardId}번째 게시글을 수정합니다.", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{boardId}")
    public ResponseEntity<BoardBasicResponse> updateBoard(@PathVariable("boardId") Long id, @RequestBody BoardUpdateRequest boardUpdateRequest){
        return boardService.updateBoard(id, boardUpdateRequest);
    }

    @ApiOperation(value = "공지사항 삭제", notes = "{boardId}번째 게시글을 삭제합니다.", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{boardId}")
    public ResponseEntity<BoardBasicResponse> deleteBoard(@PathVariable("boardId") Long id){
        return boardService.deleteBoard(id);
    }

    @ApiOperation(value = "공지사항 댓글 조회", notes = "{boardId}번째 게시글에 있는 댓글들을 조회합니다.", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{boardId}/comments")
    public ResponseEntity<BoardBasicResponse> getCommentList(@PathVariable("boardId") Long id){
        return boardCommentService.getCommentList(id);
    }

    @ApiOperation(value = "댓글 작성", notes = "{boardId}번째 게시글에 댓글을 작성합니다.", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/{boardId}/comments")
    public ResponseEntity<BasicResponse> insertComment(@PathVariable("boardId") Long id, @RequestBody BoardCommentRequest boardCommentRequest){
        return boardCommentService.insertComment(id, boardCommentRequest);
    }

    @ApiOperation(value = "댓글 수정", notes = "{boardId}번째 게시글에 있는 {commentId}번 댓글을 수정합니다.", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{boardId}/comments/{commentId}")
    public ResponseEntity<BasicResponse> updateComment(@PathVariable("boardId") Long id,@PathVariable("commentId") Long cid, @RequestBody BoardCommentRequest boardCommentRequest){
        return boardCommentService.updateComment(id, cid, boardCommentRequest.getComment());
    }

    @ApiOperation(value = "댓글 삭제", notes = "{boardId}번째 게시글에 있는 {commentId}번 댓글을 삭제합니다.", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{boardId}/comments/{commentId}")
    public ResponseEntity<BasicResponse> deleteComment(@PathVariable("boardId") Long id,@PathVariable("commentId") Long cid){
        return boardCommentService.deleteComment(id, cid);
    }

}
