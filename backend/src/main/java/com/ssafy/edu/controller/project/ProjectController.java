package com.ssafy.edu.controller.project;

import com.ssafy.edu.model.project.Request.*;
import com.ssafy.edu.model.project.Response.ProjectCommentResponse;
import com.ssafy.edu.model.project.Response.ProjectFavoriteResponse;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.service.project.ProjectService;
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

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = ProjectResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = ProjectResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = ProjectResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = ProjectResponse.class)})

@CrossOrigin(origins = {"https://localhost:3000"})
@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;

    @Autowired
    S3Service s3Service;

    @ApiOperation(value = "전체 작품 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping()
    public ResponseEntity<ProjectPageResponse> GetProjects(@RequestBody ProjectSearchTypeRequest projectSearchTypeRequest) {
        return projectService.findAll(projectSearchTypeRequest);
    }
    @ApiOperation(value = "특정 작품 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/{userEmail}/{projectId}")
    public ResponseEntity<ProjectResponse> GetOneProject(@PathVariable("userEmail")String userEmail, @PathVariable("projectId")Long projectId) {
        return projectService.findGetOne(userEmail,projectId);
    }
    @ApiOperation(value = "특정 유저가 만든 작품 목록 조회", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/uesr/{userEmail}")
    public ResponseEntity<ProjectResponse> GetUserProject(@PathVariable("userEmail")String userEmail) {
        return projectService.findGetByUserId(userEmail);
    }
    @ApiOperation(value = "작품 제작하기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/{userEmail}")
    public ResponseEntity<ProjectResponse> signUpProjects(@RequestBody ProjectSignUpRequest projectSignUpRequest) {
        return projectService.signUpProject(projectSignUpRequest);
    }
    @ApiOperation(value = "작품 수정하기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/{projectId}")
    public ResponseEntity<ProjectResponse> updateProjects(@RequestBody ProjectUpdateRequest projectUpdateRequest) {
        return projectService.updateProject(projectUpdateRequest);
    }
    @ApiOperation(value = "작품 삭제하기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/{projectId}")
    public ResponseEntity<ProjectResponse> deleteProjects(@RequestBody ProjectDeleteRequest projectDeleteRequest) {
        return projectService.deleteProject(projectDeleteRequest);
    }
    @ApiOperation(value = "작품 좋아요", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/like")
    public ResponseEntity<ProjectFavoriteResponse> projectFavorite(@RequestBody ProjectFavoriteRequest projectFavoriteRequest) {
        return projectService.projectFavorite(projectFavoriteRequest);
    }

    @ApiOperation(value = "작품 댓글 달기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/comment/{userEmail}")
    public ResponseEntity<ProjectCommentResponse> projectsignUpComments(@RequestBody ProjectCommentSignUpRequest projectCommentSignUpRequest) {
        return projectService.projectsignUpComment(projectCommentSignUpRequest);
    }
    @ApiOperation(value = "작품 댓글 수정", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @PutMapping("/comment/{commentId}")
    public ResponseEntity<ProjectCommentResponse> projectupdateComments(@RequestBody ProjectCommentUpdateRequest projectCommentUpdateRequest) {
        return projectService.projectupdateComment(projectCommentUpdateRequest);
    }
    @ApiOperation(value = "작품 댓글 삭제", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<ProjectCommentResponse> projectdeleteComments(@RequestBody ProjectCommentDeleteRequest projectCommentDeleteRequest) {
        return projectService.projectdeleteComment(projectCommentDeleteRequest);
    }
    @ApiOperation(value = "작품 댓글 목록 불러오기", notes = "", authorizations = { @Authorization(value="jwtToken") })
    @GetMapping("/comment/{projectId}")
    public ResponseEntity<ProjectCommentResponse> projectfindAllComments(@PathVariable("projectId")Long projectId ) {
        return projectService.projectGetComment(projectId);
    }
    @ApiOperation(value = "작품 이미지 저장", notes = "작품의 이미지를 저장합니다.", authorizations = { @Authorization(value="jwtToken") })
    @PostMapping("/img/{userEmail}/{projectId}")
    public ResponseEntity<ProjectResponse> uploadProjectImage(@RequestParam MultipartFile file, @PathVariable("userEmail") String userEmail, @PathVariable("projectId") Long projectId) throws IOException {
        String imagePath = s3Service.upload(file, "project");
        return projectService.uploadMissionImage(userEmail, projectId, imagePath);
    }
}
