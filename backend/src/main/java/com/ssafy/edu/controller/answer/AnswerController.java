package com.ssafy.edu.controller.answer;

import com.ssafy.edu.model.answer.Request.AnswerDeleteRequest;
import com.ssafy.edu.model.answer.Request.AnswerSearchTypeRequest;
import com.ssafy.edu.model.answer.Request.AnswerSignupRequest;
import com.ssafy.edu.model.answer.Request.AnswerUpdateRequest;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import com.ssafy.edu.service.answer.AnswerService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = AnswerResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = AnswerResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = AnswerResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = AnswerResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/answer")
public class AnswerController {

    @Autowired
    AnswerService answerService;

    @ApiOperation(value = "전체 미션 답안 조회", notes = "")
    @PostMapping()
    public ResponseEntity<AnswerPageResponse> GetAnswer(@RequestBody AnswerSearchTypeRequest answerSearchTypeRequest) {
        return null;
    }
    @ApiOperation(value = "특정 미션에 제출한 답안 목록 조회", notes = "")
    @GetMapping("/{userEmail}/{missionId}")
    public ResponseEntity<AnswerResponse> GetOneAnswer(@PathVariable("userEmail")String userEmail, @PathVariable("missionId")Long missionId) {
        return null;
    }
    @ApiOperation(value = "내가 참여한 미션 답안 목록", notes = "")
    @GetMapping("/user/{userEmail}")
    public ResponseEntity<AnswerResponse> GetUserAnswer(@PathVariable("userEmail")String userEmail) {
        return null;
    }
    @ApiOperation(value = "미션 답안 제출", notes = "")
    @PostMapping("/{userEmail}")
    public ResponseEntity<AnswerResponse> signUpAnswer(@RequestBody AnswerSignupRequest answerSignupRequest) {
        return null;
    }
    @ApiOperation(value = "내가 제출한 미션 답안 수정", notes = "")
    @PutMapping("/{answerId}")
    public ResponseEntity<AnswerResponse> updateAnswer(@RequestBody AnswerUpdateRequest answerUpdateRequest) {
        return null;
    }
    @ApiOperation(value = "내가 제출한 미션 답안 삭제", notes = "")
    @DeleteMapping("/{answerId}")
    public ResponseEntity<AnswerResponse> deleteAnswer(@RequestBody AnswerDeleteRequest answerDeleteRequest) {
        return null;
    }
}
