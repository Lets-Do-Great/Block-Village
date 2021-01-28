package com.ssafy.edu.controller.mission;

import com.ssafy.edu.model.mission.*;
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
    @PostMapping()
    public ResponseEntity<MissionResponse> GetMissions(@RequestBody MissionSearchTypeRequest missionSearchTypeRequest){
        return missionService.findAll(missionSearchTypeRequest);
    }
    @ApiOperation(value = "현재 조회중인 미션 정보 조회", notes = "현재 조회중인 미션 정보 조회")
    @GetMapping("/{userEmail}/{missionId}")
    public ResponseEntity<MissionOneResponse> GetOneMissions(@PathVariable("userEmail")String userEmail,@PathVariable("missionId") Long missionId){
        return missionService.findGetOne(missionId,userEmail);
    }
    @ApiOperation(value = "특정 유저의 미션목록 조회", notes = "특정 유저의 미션목록 조회")
    @GetMapping("/user/{userEmail}")
    public ResponseEntity<MissionResponse> GetUserMissions(@PathVariable("userEmail") String userEmail){
        return missionService.findGetOneByUserId(userEmail);
    }
    @ApiOperation(value = "미션 저장하기", notes = "미션 저장하기")
    @PostMapping("/{userEmail}")
    public ResponseEntity<MissionOneResponse> signUpMission(@RequestBody MissionSignUpRequest missionSignUpRequest){
        return missionService.signUpMission(missionSignUpRequest);
    }
    @ApiOperation(value = "미션 정보 수정", notes = "미션 정보 수정")
    @PutMapping("/{missionId}")
    public ResponseEntity<MissionOneResponse> updateMission(@RequestBody MissionUpdateRequest missionUpdateRequest){
        return missionService.updateMission(missionUpdateRequest);
    }
    @ApiOperation(value = "미션 삭제", notes = "미션 삭제")
    @DeleteMapping("/{missionId}")
    public ResponseEntity<MissionResponse> deleteMission(@PathVariable("missionId") Long missionId){
        return missionService.deleteMission(missionId);
    }
    @ApiOperation(value = "미션 진행도", notes = "미션 진행도")
    @PostMapping("/todo")
    public ResponseEntity<MissionResponse> MissionTodo(@RequestBody MissionTodoRequest missionTodoReqquest){
        return missionService.MissionTodo(missionTodoReqquest);
    }
    @ApiOperation(value = "미션 좋아요", notes = "미션 좋아요")
    @PostMapping("/like")
    public ResponseEntity<MissionFavoriteResponse> missionFavorite(@RequestBody MissionFavoriteRequest missionLikeRequest){
        return missionService.MissionFavorite(missionLikeRequest);
    }
    @ApiOperation(value = "난이도 채점", notes = "난이도 채점")
    @PostMapping("/difficult")
    public ResponseEntity<MissionDifficultyResponse> missionDifficult(@RequestBody MissionDifficultRequest missionDifficultRequest){
        return missionService.difficultyMission(missionDifficultRequest);
    }
}
