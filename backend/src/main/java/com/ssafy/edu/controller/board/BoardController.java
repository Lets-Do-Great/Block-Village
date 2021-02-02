package com.ssafy.edu.controller.user;

import com.ssafy.edu.model.BasicResponse;
import com.ssafy.edu.model.board.*;
import com.ssafy.edu.service.board.BoardCommentServiceImpl;
import com.ssafy.edu.service.board.BoardServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = BoardResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BoardResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BoardResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BoardResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/boards")
public class BoardController {

    @Autowired
    private BoardServiceImpl boardService;

    @Autowired
    private BoardCommentServiceImpl boardCommentService;

    @ApiOperation(value = "게시글 모두 불러오기", notes = "데이터베이스에 저장된 모든 게시글을 불러옵니다.")
    @GetMapping
    public ResponseEntity<BoardResponse> getBoardList(){
        return boardService.getBoardList();
    }

    @ApiOperation(value = "id번 게시글, 댓글 불러오기", notes = "board_id가 {id}인 게시글과 댓글들을 불러옵니다.")
    @GetMapping("/{id}")
    public ResponseEntity<BoardResponse> getBoard(@PathVariable("id") Long id){
        return boardService.getBoard(id);
    }

    @ApiOperation(value = "작성한 게시글 저장", notes = "작성한 게시글이 데이터베이스에 저장됩니다.")
    @PostMapping("/")
    public ResponseEntity<BoardResponse> insertBoard(@RequestBody BoardRequest boardInsertRequest){
        return boardService.insertBoard(boardInsertRequest);
    }

    @ApiOperation(value = "게시글 수정", notes = "{id}번째 게시글을 수정합니다.")
    @PutMapping("/{id}")
    public ResponseEntity<BoardResponse> updateBoard(@PathVariable("id") Long id, @RequestBody BoardUpdateRequest boardUpdateRequest){
        return boardService.updateBoard(id, boardUpdateRequest);
    }

    @ApiOperation(value = "게시글 삭제", notes = "{id}번째 게시글을 삭제합니다.")
    @DeleteMapping("/{id}")
    public ResponseEntity<BoardResponse> deleteBoard(@PathVariable("id") Long id){
        return boardService.deleteBoard(id);
    }

    @ApiOperation(value = "id번 게시글에 댓글 추가", notes = "{id}번째 게시글에 댓글을 작성합니다.")
    @PostMapping("/{id}/comments")
    public ResponseEntity<BasicResponse> insertComment(@PathVariable("id") Long id, @RequestBody BoardCommentRequest boardCommentRequest){
        return boardCommentService.insertComment(id, boardCommentRequest);
    }

    @ApiOperation(value = "id번 게시글의 cid번 댓글 수정", notes = "{id}번째 게시글에 있는 cid번 댓글을 수정합니다.")
    @PutMapping("/{id}/comments/{cid}")
    public ResponseEntity<BasicResponse> updateComment(@PathVariable("id") Long id,@PathVariable("cid") Long cid, @RequestBody String content){
        return boardCommentService.updateComment(id, cid, content);
    }

    @ApiOperation(value = "id번 게시글의 cid번 댓글 삭제", notes = "{id}번째 게시글에 있는 cid번 댓글을 삭제합니다.")
    @DeleteMapping("/{id}/comments/{cid}")
    public ResponseEntity<BasicResponse> deleteComment(@PathVariable("id") Long id,@PathVariable("cid") Long cid){
        return boardCommentService.deleteComment(id, cid);
    }

    @ApiOperation(value = "id번 게시글 좋아요 등록/취소", notes = "{id}번째 게시글에 사용자 {email}이 좋아요 등록/취소 합니다.")
    @PutMapping("/{id}/likes/{email}")
    public ResponseEntity<BoardResponse> likeButton(@PathVariable("id") Long id, @PathVariable("email") String email){
        return boardService.likeBoard(id, email);
    }

}
