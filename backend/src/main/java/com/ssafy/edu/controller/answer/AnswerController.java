package com.ssafy.edu.controller.answer;

import com.ssafy.edu.model.answer.Request.*;
import com.ssafy.edu.model.answer.Response.AnswerCommentResponse;
import com.ssafy.edu.model.answer.Response.AnswerFavoriteResponse;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import com.ssafy.edu.service.answer.AnswerService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = AnswerResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = AnswerResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = AnswerResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = AnswerResponse.class)})

//@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("/answer")
public class AnswerController {

    @Autowired
    AnswerService answerService;

    @ApiOperation(value = "전체 미션 답안 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping()
    public ResponseEntity<AnswerPageResponse> GetAnswer(@RequestBody AnswerSearchTypeRequest answerSearchTypeRequest) {
        return answerService.findAll(answerSearchTypeRequest);
    }
    @ApiOperation(value = "특정 미션에 제출한 답안 목록 전체 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{missionId}")
    public ResponseEntity<AnswerResponse> GetListAnswer(@PathVariable("missionId")Long missionId) {
        return answerService.findGetList(missionId);
    }
    @ApiOperation(value = "특정 미션에 제출한 답안 목록 한개 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{userEmail}/{answerId}")
    public ResponseEntity<AnswerResponse> GetOneAnswer(@PathVariable("userEmail")String userEmail, @PathVariable("answerId")Long answerId) {
        return answerService.findGetOne(userEmail,answerId);
    }
    @ApiOperation(value = "내가 참여한 미션 답안 목록", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/user/{userEmail}")
    public ResponseEntity<AnswerResponse> GetUserAnswer(@PathVariable("userEmail")String userEmail) {
        return answerService.findGetOneByUserId(userEmail);
    }
    @ApiOperation(value = "미션 답안 제출", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/{userEmail}")
    public ResponseEntity<AnswerResponse> signUpAnswer(@RequestBody AnswerSignupRequest answerSignupRequest) {
        return answerService.signUpAnswer(answerSignupRequest);
    }
    @ApiOperation(value = "내가 제출한 미션 답안 수정", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{answerId}")
    public ResponseEntity<AnswerResponse> updateAnswer(@RequestBody AnswerUpdateRequest answerUpdateRequest) {
        return answerService.updateAnswer(answerUpdateRequest);
    }
    @ApiOperation(value = "내가 제출한 미션 답안 삭제", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{answerId}")
    public ResponseEntity<AnswerResponse> deleteAnswer(@RequestBody AnswerDeleteRequest answerDeleteRequest) {
        return answerService.deleteAnswer(answerDeleteRequest);
    }
    @ApiOperation(value = "작품 좋아요", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/like")
    public ResponseEntity<AnswerFavoriteResponse> answerFavorite(@RequestBody AnswerFavoriteRequest answerFavoriteRequest) {
        return answerService.answerFavorite(answerFavoriteRequest);
    }
    @ApiOperation(value = "특정 답안 댓글 불러오기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/comment/{answerId}")
    public ResponseEntity<AnswerCommentResponse> answerfindGetComment(@PathVariable("answerId")Long answerId ) {
        return answerService.answerfindGetComment(answerId);
    }
    @ApiOperation(value = "특정 답안 댓글 작성", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/comment/{userEmail}")
    public ResponseEntity<AnswerCommentResponse> answersignUpComment(@RequestBody AnswerCommentSignUpRequest answerCommentSignUpRequest) {
        return answerService.answersignUpComment(answerCommentSignUpRequest);
    }
    @ApiOperation(value = "특정 답안 댓글 수정", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/comment/{commentId}")
    public ResponseEntity<AnswerCommentResponse> answerupdateComment(@RequestBody AnswerCommentUpdateRequest answerCommentUpdateRequest) {
        return answerService.answerupdateComment(answerCommentUpdateRequest);
    }
    @ApiOperation(value = "특정 답안 댓글 삭제", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<AnswerCommentResponse> answerdeleteComment(@RequestBody AnswerCommentDeleteRequest answerCommentDeleteRequest) {
        return answerService.answerdeleteComment(answerCommentDeleteRequest);
    }
}
