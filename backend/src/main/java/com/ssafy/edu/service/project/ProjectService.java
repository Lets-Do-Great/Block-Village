package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Request.*;
import com.ssafy.edu.model.project.Response.ProjectCommentResponse;
import com.ssafy.edu.model.project.Response.ProjectFavoriteResponse;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import org.springframework.http.ResponseEntity;

public interface ProjectService {
    public ResponseEntity<ProjectPageResponse> findAll(ProjectSearchTypeRequest projectSearchTypeRequest);
    public ResponseEntity<ProjectResponse> findGetOne(String userEmail, Long projectId);
    public ResponseEntity<ProjectResponse> findGetOneByUserId(String userEmail);
    public ResponseEntity<ProjectResponse> signUpProject(ProjectSignUpRequest projectSignUpRequest);
    public ResponseEntity<ProjectResponse> updateProject(ProjectUpdateRequest projectUpdateRequest);
    public ResponseEntity<ProjectResponse> deleteProject(ProjectDeleteRequest projectDeleteRequest);
    public ResponseEntity<ProjectFavoriteResponse> projectFavorite(ProjectFavoriteRequest projectFavoriteRequest);
    public ResponseEntity<ProjectCommentResponse> projectGetComment(Long projectId);
    public ResponseEntity<ProjectCommentResponse> projectsignUpComment(ProjectCommentSignUpRequest projectCommentSignUpRequest);
    public ResponseEntity<ProjectCommentResponse> projectupdateComment(ProjectCommentUpdateRequest projectCommentUpdateRequest);
    public ResponseEntity<ProjectCommentResponse> projectdeleteComment(ProjectCommentDeleteRequest projectCommentDeleteRequest);
}
