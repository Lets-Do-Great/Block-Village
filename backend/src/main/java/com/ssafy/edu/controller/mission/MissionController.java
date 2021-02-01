package com.ssafy.edu.controller.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.mission.MissionDifficultyResponse;
import com.ssafy.edu.model.mission.MissionFavoriteResponse;
import com.ssafy.edu.model.mission.MissionOneResponse;
import com.ssafy.edu.model.mission.MissionResponse;
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

    @ApiOperation(value = "전체 미션 조회", notes = "**sortType**\n" + "\n" + "- 오름차순 = 'increase'\n" + "- 내림차순 = 'decrease'\n" + "\n" + "**searchType**\n" + "\n" + "- 좋아요 순 = 'favorite'\n" + "- new 순 = 'updatedAt'\n" + "- 난이도 순 = 'difficulty'\n" + "- 참여한 사람 순 =  'people'\n" + "\n" + "**keyword**\n" + "\n" + "- 검색어\n" + "\n" + "**keywordType**\n" + "\n" + "- 유저 = 'user'\n" + "- 제목 = 'title'")
    @PostMapping()
    public ResponseEntity<MissionPageResponse> GetMissions(@RequestBody MissionSearchTypeRequest missionSearchTypeRequest) {
        return missionService.findAll(missionSearchTypeRequest);
    }

    @ApiOperation(value = "현재 조회중인 미션 정보 조회", notes = "현재 조회중인 미션 정보 조회 missionId,\n" + "email")
    @GetMapping("/{userEmail}/{missionId}")
    public ResponseEntity<MissionOneResponse> GetOneMissions(@PathVariable("userEmail") String userEmail, @PathVariable("missionId") Long missionId) {
        return missionService.findGetOne(missionId, userEmail);
    }

    @ApiOperation(value = "특정 유저의 미션목록 조회", notes = "특정 유저의 미션목록 조회 email")
    @GetMapping("/user/{userEmail}")
    public ResponseEntity<MissionResponse> GetUserMissions(@PathVariable("userEmail") String userEmail) {
        return missionService.findGetOneByUserId(userEmail);
    }

    @ApiOperation(value = "미션 제작하기", notes = "미션 저장하기 {\n" + "\temail,\n" + "\tmissionId,\n" + "\ttitle,\n" + "\tcontent, \n" + "\tcode, \n" + "\timage, \n" + "}")
    @PostMapping("/{userEmail}")
    public ResponseEntity<MissionOneResponse> signUpMission(@RequestBody MissionSignUpRequest missionSignUpRequest) {
        return missionService.signUpMission(missionSignUpRequest);
    }

    @ApiOperation(value = "미션 정보 수정", notes = "미션 정보 수정 {\n" + "\temail,\n" + "\tmissionId,\n" + "\ttitle,\n" + "\tcontent, \n" + "\tcode, \n" + "\timage, \n" + "}")
    @PutMapping("/{missionId}")
    public ResponseEntity<MissionOneResponse> updateMission(@RequestBody MissionUpdateRequest missionUpdateRequest) {
        return missionService.updateMission(missionUpdateRequest);
    }

    @ApiOperation(value = "미션 삭제", notes = "미션 삭제 {\n" + "\temail,\n" + "\tmissionId, \n" + "}")
    @DeleteMapping("/{missionId}")
    public ResponseEntity<MissionResponse> deleteMission(@RequestBody MissionDeleteRequest missionDeleteRequest) {
        return missionService.deleteMission(missionDeleteRequest);
    }

    @ApiOperation(value = "미션 진행도", notes = "미션 진행도 {\n" + "\temail,\n" + "\tmissionId, \n" +  "\ttodo\n"+"}")
    @PostMapping("/todo")
    public ResponseEntity<MissionResponse> MissionTodo(@RequestBody MissionTodoRequest missionTodoReqquest) {
        return missionService.MissionTodo(missionTodoReqquest);
    }

    @ApiOperation(value = "미션 좋아요", notes = "미션 좋아요 1) 좋아요 등록\n" + "{\n" + "\temail,\n" + "\tmissionId,\n" + "\tfavorite: true,\n" + "}\n" + "\n" + "2) 좋아요 취소\n" + "{\n" + "\temail,\n" + "\tmissionId,\n" + "\tfavorite: false,\n" + "}")
    @PostMapping("/like")
    public ResponseEntity<MissionFavoriteResponse> missionFavorite(@RequestBody MissionFavoriteRequest missionLikeRequest) {
        return missionService.MissionFavorite(missionLikeRequest);
    }

    @ApiOperation(value = "난이도 채점", notes = "난이도 채점 {\n" + "\temail,\n" + "\tmissionId,\n" + "\tdifficulty (double),\n" + "}")
    @PostMapping("/difficult")
    public ResponseEntity<MissionDifficultyResponse> missionDifficult(@RequestBody MissionDifficultRequest missionDifficultRequest) {
        return missionService.difficultyMission(missionDifficultRequest);
    }
}
