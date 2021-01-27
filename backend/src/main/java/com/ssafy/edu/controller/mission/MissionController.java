package com.ssafy.edu.controller.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.user.LoginRequest;
import com.ssafy.edu.model.user.SignUpRequest;
import com.ssafy.edu.model.user.UpdateRequest;
import com.ssafy.edu.model.user.UserResponse;
import com.ssafy.edu.service.mission.MissionService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = MissionResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = MissionResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = MissionResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = MissionResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/mission")
public class MissionController {

    @Autowired
    MissionService missionService;

    @ApiOperation(value = "전체 미션 목록 조회", notes = "미션 불러오기")
    @PostMapping("/")
    public ResponseEntity<MissionResponse> GetMissions(@RequestBody MissionSearchTypeRequest missionSearchTypeRequest){
        return missionService.findAll(missionSearchTypeRequest);
    }
    @ApiOperation(value = "현재 조회중인 미션 정보 조회", notes = "미션 불러오기")
    @GetMapping("/{missionId}")
    public ResponseEntity<MissionResponse> GetOneMissions(@PathVariable("missionId") Long missionId){
        return missionService.findById(missionId);
    }
    @ApiOperation(value = "현재 조회중인 미션 정보 조회", notes = "미션 불러오기")
    @GetMapping("/user/{userId}")
    public ResponseEntity<MissionResponse> GetUserMissions(@PathVariable("userId") Long userId){
        return missionService.findByUserId(userId);
    }
    @ApiOperation(value = "미션 저장하기", notes = "미션 저장하기")
    @PostMapping("/{userEmail}")
    public ResponseEntity<MissionResponse> signUpMission(@RequestBody MissionSignUpRequest missionSignUpRequest){
        return missionService.signUpMission(missionSignUpRequest);
    }
    @ApiOperation(value = "미션 정보 수정", notes = "미션 정보 수정")
    @PutMapping("/{missionId}")
    public ResponseEntity<MissionResponse> updateMission(@PathVariable("missionId") String missionId, @RequestBody MissionUpdateRequest missionUpdateRequest){
        return missionService.updateMission(missionUpdateRequest);
    }
    @ApiOperation(value = "미션 삭제", notes = "미션 삭제")
    @DeleteMapping("/{missionId}")
    public ResponseEntity<MissionResponse> deleteMission(@PathVariable("missionId") Long missionId){
        return missionService.deleteMission(missionId);
    }
    @ApiOperation(value = "미션 좋아요", notes = "미션 좋아요")
    @PostMapping("/like/{missionId}")
    public ResponseEntity<MissionLikeUsersResponse> missionLike(@RequestBody MissionLikeRequest missionLikeRequest){
        return missionService.likeMission(missionLikeRequest);
    }
    @ApiOperation(value = "난이도 채점", notes = "난이도 채점")
    @PostMapping("/difficult/{missionId}")
    public ResponseEntity<MissionDifficultyResponse> missionDifficult(@RequestBody MissionDifficultRequest missionDifficultRequest){
        return missionService.difficultyMission(missionDifficultRequest);
    }
}
