package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Request.ProjectSearchTypeRequest;
import com.ssafy.edu.model.project.Request.ProjectSignUpRequest;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import org.springframework.http.ResponseEntity;

public interface ProjectService {
    public ResponseEntity<ProjectPageResponse> findAll(ProjectSearchTypeRequest projectSearchTypeRequest);
    public ResponseEntity<ProjectResponse> signUpProject(ProjectSignUpRequest projectSignUpRequest);

}
