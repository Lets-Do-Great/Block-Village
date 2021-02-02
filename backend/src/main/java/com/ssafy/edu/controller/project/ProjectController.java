package com.ssafy.edu.controller.project;

import com.ssafy.edu.model.project.Request.ProjectSearchTypeRequest;
import com.ssafy.edu.model.project.Request.ProjectSignUpRequest;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.service.project.ProjectService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@ApiResponses(value = {@ApiResponse(code = 401, message = "Unauthorized", response = ProjectResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = ProjectResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = ProjectResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = ProjectResponse.class)})

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/project")
public class ProjectController {
    @Autowired
    ProjectService projectService;


    @ApiOperation(value = "전체 작품 조회", notes = "")
    @PostMapping()
    public ResponseEntity<ProjectPageResponse> GetProjects(@RequestBody ProjectSearchTypeRequest projectSearchTypeRequest) {
        return projectService.findAll(projectSearchTypeRequest);
    }


    @ApiOperation(value = "작품 제작하기", notes = "")
    @PostMapping()
    public ResponseEntity<ProjectResponse> signUpProjects(@RequestBody ProjectSignUpRequest projectSignUpRequest) {
        return null;
    }
}
