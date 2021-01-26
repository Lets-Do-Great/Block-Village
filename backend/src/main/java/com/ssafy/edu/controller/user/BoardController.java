package com.ssafy.edu.controller.user;

import com.ssafy.edu.model.board.BoardInsertRequest;
import com.ssafy.edu.model.board.BoardResponse;
import com.ssafy.edu.model.board.BoardUpdateRequest;
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

    @ApiOperation(value = "게시글 모두 불러오기", notes = "데이터베이스에 저장된 모든 게시글을 불러옵니다.")
    @GetMapping
    public ResponseEntity<BoardResponse> getBoardList(){
        return boardService.getBoardList();
    }

    @ApiOperation(value = "id번 게시글 불러오기", notes = "board_id가 {id}인 게시글을 불러옵니다.")
    @GetMapping("/{id}")
    public ResponseEntity<BoardResponse> getBoard(@PathVariable("id") Long id){
        return boardService.getBoard(id);
    }

    @ApiOperation(value = "작성한 게시글 저장", notes = "{email}이 작성한 게시글이 데이터베이스에 저장됩니다.")
    @PostMapping("/{email}")
    public ResponseEntity<BoardResponse> insertBoard(@PathVariable("email") String email, @RequestBody BoardInsertRequest boardInsertRequest){
        return boardService.insertBoard(email, boardInsertRequest);
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

}
