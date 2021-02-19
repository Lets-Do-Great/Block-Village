package com.ssafy.edu.controller.mission;

import com.ssafy.edu.model.mission.Response.*;
import com.ssafy.edu.model.mission.Request.*;
import com.ssafy.edu.service.mission.MissionService;
import com.ssafy.edu.service.s3Service.S3Service;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = MissionResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = MissionResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = MissionResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = MissionResponse.class)})

//@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("/mission")
public class MissionController {

    @Autowired
    MissionService missionService;

    @Autowired
    S3Service s3Service;

    @ApiOperation(value = "전체 미션 조회", notes = "**sortType**\n" + "\n" + "- 오름차순 = 'increase'\n" + "- 내림차순 = 'decrease'\n" + "\n" + "**searchType**\n" + "\n" + "- 좋아요 순 = 'favorite'\n" + "- new 순 = 'updatedAt'\n" + "- 난이도 순 = 'difficulty'\n" + "- 참여한 사람 순 =  'people'\n" + "\n" + "**keyword**\n" + "\n" + "- 검색어\n" + "\n" + "**keywordType**\n" + "\n" + "- 유저 = 'user'\n" + "- 제목 = 'title'", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping()
    public ResponseEntity<MissionPageResponse> GetMissions(@RequestBody MissionSearchTypeRequest missionSearchTypeRequest) {
        return missionService.findAll(missionSearchTypeRequest);
    }

    @ApiOperation(value = "현재 조회중인 미션 정보 조회", notes = "현재 조회중인 미션 정보 조회 missionId,\n" + "email", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{userEmail}/{missionId}")
    public ResponseEntity<MissionOneResponse> GetOneMissions(@PathVariable("userEmail") String userEmail, @PathVariable("missionId") Long missionId) {
        return missionService.findGetOne(missionId, userEmail);
    }

    @ApiOperation(value = "특정 유저의 미션목록 조회", notes = "특정 유저의 미션목록 조회 email", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/user/{userEmail}")
    public ResponseEntity<MissionResponse> GetUserMissions(@PathVariable("userEmail") String userEmail) {
        return missionService.GetUserMissions(userEmail);
    }

    @ApiOperation(value = "특정 유저의 진행중인 미션목록 조회", notes = "특정 유저의 미션목록 조회 email", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/user/{userEmail}")
    public ResponseEntity<MissionResponse> GetUserTodoMissions(@RequestBody MissionUserTodoRequest missionUserTodoRequest) {
        return missionService.GetUserTodoMissions(missionUserTodoRequest);
    }

    @ApiOperation(value = "미션 제작하기", notes = "미션 저장하기 {\n" + "\temail,\n" + "\tmissionId,\n" + "\ttitle,\n" + "\tcontent, \n" + "\tcode, \n" + "\timage, \n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/{userEmail}")
    public ResponseEntity<MissionOneResponse> signUpMission(@RequestBody MissionSignUpRequest missionSignUpRequest) {
        return missionService.signUpMission(missionSignUpRequest);
    }

    @ApiOperation(value = "미션 정보 수정", notes = "미션 정보 수정 {\n" + "\temail,\n" + "\tmissionId,\n" + "\ttitle,\n" + "\tcontent, \n" + "\tcode, \n" + "\timage, \n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{missionId}")
    public ResponseEntity<MissionOneResponse> updateMission(@RequestBody MissionUpdateRequest missionUpdateRequest) {
        return missionService.updateMission(missionUpdateRequest);
    }

    @ApiOperation(value = "미션 삭제", notes = "미션 삭제 {\n" + "\temail,\n" + "\tmissionId, \n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{missionId}")
    public ResponseEntity<MissionResponse> deleteMission(@RequestBody MissionDeleteRequest missionDeleteRequest) {
        return missionService.deleteMission(missionDeleteRequest);
    }

    @ApiOperation(value = "미션 진행도", notes = "미션 진행도 {\n" + "\temail,\n" + "\tmissionId, \n" + "\ttodo\n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/todo")
    public ResponseEntity<MissionResponse> MissionTodo(@RequestBody MissionTodoRequest missionTodoRequest) {
        return missionService.MissionTodo(missionTodoRequest);
    }

    @ApiOperation(value = "미션 좋아요", notes = "미션 좋아요 1) 좋아요 등록\n" + "{\n" + "\temail,\n" + "\tmissionId,\n" + "\tfavorite: true,\n" + "}\n" + "\n" + "2) 좋아요 취소\n" + "{\n" + "\temail,\n" + "\tmissionId,\n" + "\tfavorite: false,\n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/like")
    public ResponseEntity<MissionFavoriteResponse> missionFavorite(@RequestBody MissionFavoriteRequest missionLikeRequest) {
        return missionService.MissionFavorite(missionLikeRequest);
    }

    @ApiOperation(value = "난이도 채점", notes = "난이도 채점 {\n" + "\temail,\n" + "\tmissionId,\n" + "\tdifficulty (double),\n" + "}", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/difficult")
    public ResponseEntity<MissionDifficultyResponse> missionDifficult(@RequestBody MissionDifficultRequest missionDifficultRequest) {
        return missionService.difficultyMission(missionDifficultRequest);
    }

    @ApiOperation(value = "미션 이미지 저장", notes = "미션의 이미지를 저장합니다.", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/img/{userEmail}/{missionId}")
    public ResponseEntity<MissionResponse> uploadMissionImage(@RequestParam MultipartFile file, @PathVariable("userEmail") String userEmail, @PathVariable("missionId") Long missionId) throws IOException {
        String imagePath = s3Service.upload(file, "mission");
        return missionService.uploadMissionImage(userEmail, missionId, imagePath);
    }
}
