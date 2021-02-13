package com.ssafy.edu.controller.Challenge;


import com.ssafy.edu.model.board.BoardResponse;
import com.ssafy.edu.model.challenge.ChallengeResponse;
import com.ssafy.edu.model.challenge.ChallengeUserRequest;
import com.ssafy.edu.service.challenge.ChallengeServiceImpl;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = BoardResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BoardResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BoardResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BoardResponse.class)})

@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("challenges")
public class ChallengeController {

    @Autowired
    private ChallengeServiceImpl challengeService;

    @ApiOperation(value = "전체 챌린지 목록 불러오기", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{email}")
    public ResponseEntity<ChallengeResponse> getChallengeList(@PathVariable("email")String email){
        return challengeService.getChallengeList(email);
    }

    @ApiOperation(value = "특정 유저가 참가한 챌린지 목록 불러오기", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{email}/{todo}")
    public ResponseEntity<ChallengeResponse> getUserChallengeList(@PathVariable("email")String email, @PathVariable("todo")String todo){
        return challengeService.getUserChallengeList(email, todo);
    }

    @ApiOperation(value = "현재 로그인한 유저가 챌린지 참여하기", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/{challengeId}/joinchallenge")
    public ResponseEntity<ChallengeResponse> joinChallenge(@PathVariable("challengeId") Long challengeId, @RequestBody ChallengeUserRequest challengeUserRequest){
        return challengeService.joinChallenge(challengeUserRequest, challengeId);
    }
}
