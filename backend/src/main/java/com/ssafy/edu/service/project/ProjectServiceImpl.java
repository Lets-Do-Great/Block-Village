package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Project;
import com.ssafy.edu.model.project.ProjectComment;
import com.ssafy.edu.model.project.ProjectFavorite;
import com.ssafy.edu.model.project.Request.*;
import com.ssafy.edu.model.project.Response.ProjectCommentResponse;
import com.ssafy.edu.model.project.Response.ProjectFavoriteResponse;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.project.ProjectCommentJpaRepository;
import com.ssafy.edu.repository.project.ProjectFavoriteJpaRepository;
import com.ssafy.edu.repository.project.ProjectJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService{

    @Autowired
    ProjectJpaRepository projectJpaRepository;
    @Autowired
    UserJpaRepository userJpaRepository;
    @Autowired
    ProjectFavoriteJpaRepository projectFavoriteJpaRepository;
    @Autowired
    ProjectCommentJpaRepository projectCommentJpaRepository;
    @Override
    public ResponseEntity<ProjectPageResponse> findAll(ProjectSearchTypeRequest projectSearchTypeRequest) {
        ResponseEntity response;
        ProjectPageResponse result = new ProjectPageResponse();
        List<Object> resultObject = new ArrayList<>();
        Page<Project> projectList = null;

        if(projectSearchTypeRequest.getKeywordType().equals("title")){
            if(projectSearchTypeRequest.getSortType().equals("increase")){
                projectList = projectJpaRepository.findByTitleContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),3, Sort.by(projectSearchTypeRequest.getSearchType())));
            }else if(projectSearchTypeRequest.getSortType().equals("decrease")){
                projectList = projectJpaRepository.findByTitleContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),3, Sort.by(projectSearchTypeRequest.getSearchType()).descending()));
            }
        }else if(projectSearchTypeRequest.getKeywordType().equals("user")){
            if(projectSearchTypeRequest.getSortType().equals("increase")){
                projectList = projectJpaRepository.findByUserNicknameContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),3, Sort.by(projectSearchTypeRequest.getSearchType())));
            }else if(projectSearchTypeRequest.getSortType().equals("decrease")){
                projectList = projectJpaRepository.findByUserNicknameContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),3, Sort.by(projectSearchTypeRequest.getSearchType()).descending()));
            }
        }
        resultObject.add(projectList);
        result.status = true;
        result.data = resultObject;
        response = new ResponseEntity<>(result, HttpStatus.OK);
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> findGetOne(String userEmail, Long projectId) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();
        Optional<Project> projectOptional = projectJpaRepository.findById(projectId);

        if(projectOptional.isPresent()){
            projectOptional.get().setView(projectOptional.get().getView()+1);
            Project proejct = projectJpaRepository.save(projectOptional.get());

            result.status = true;
            result.data = proejct;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> findGetOneByUserId(String userEmail) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);
        if(userOptional.isPresent()){
            result.status = true;
            result.data = projectJpaRepository.findByUserEmailOrderByUpdatedAtDesc(userOptional.get().getEmail());
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> signUpProject(ProjectSignUpRequest projectSignUpRequest) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(projectSignUpRequest.getEmail());
        System.out.println("userOptional = " + userOptional.get().toString());
        if(userOptional.isPresent()){
            Date now = new Date(System.currentTimeMillis());
            Project project = new Project().builder()
                    .title(projectSignUpRequest.getTitle())
                    .content(projectSignUpRequest.getTitle())
                    .favorite(0)
                    .view(0)
                    .xmlCode(projectSignUpRequest.getXmlCode())
                    .javascriptCode(projectSignUpRequest.getJavascriptCode())
                    .blockCnt(projectSignUpRequest.getBlockCnt())
                    .createdAt(now)
                    .updatedAt(now)
                    .user(userOptional.get())
                    .build();

            Project projectResult = projectJpaRepository.save(project);

            result.status = true;
            result.data = projectResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> updateProject(ProjectUpdateRequest projectUpdateRequest) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();

        Optional<Project> projectOptional = projectJpaRepository.findByIdAndUserEmail(projectUpdateRequest.getProjectId(),projectUpdateRequest.getEmail());

        if(projectOptional.isPresent()){
            Date now = new Date(System.currentTimeMillis());
            Project project = projectOptional.get();
            project.setTitle(projectUpdateRequest.getTitle());
            project.setContent(projectUpdateRequest.getContent());
            project.setBlockCnt(projectUpdateRequest.getBlockCnt());
            project.setXmlCode(projectUpdateRequest.getXmlCode());
            project.setJavascriptCode(projectUpdateRequest.getJavascriptCode());
            project.setUpdatedAt(now);

            Project projectResult = projectJpaRepository.save(project);
            result.status = true;
            result.data = projectResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> deleteProject(ProjectDeleteRequest projectDeleteRequest) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();

        Optional<Project> projectOptional = projectJpaRepository.findByIdAndUserEmail(projectDeleteRequest.getProjectId(),projectDeleteRequest.getEmail());

        if(projectOptional.isPresent()){
            projectJpaRepository.delete(projectOptional.get());
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectFavoriteResponse> projectFavorite(ProjectFavoriteRequest projectFavoriteRequest) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(projectFavoriteRequest.getEmail());
        Optional<Project> projectOptional = projectJpaRepository.findById(projectFavoriteRequest.getProjectId());
        Optional<ProjectFavorite> projectFavoriteOptional = Optional.ofNullable(projectFavoriteJpaRepository.findByUserEmailAndProjectId(userOptional.get().getEmail(),projectOptional.get().getId()));

        if(projectFavoriteOptional.isEmpty()){
            ProjectFavorite projectFavorite = new ProjectFavorite().builder()
                    .project(projectOptional.get())
                    .user(projectOptional.get().getUser())
                    .favorite(projectFavoriteRequest.isFavorite())
                    .build();
            ProjectFavorite projectFavoriteResult = projectFavoriteJpaRepository.save(projectFavorite);
            if(projectOptional.isPresent()) {
                List<ProjectFavorite> projectFavoriteList = projectFavoriteJpaRepository.findByProjectId(projectOptional.get().getId());
                projectOptional.get().setFavorite((int) projectFavoriteList.stream().filter(p -> p.isFavorite()).count());
                projectJpaRepository.save(projectOptional.get());
            }
            result.status = true;
            result.data = projectFavoriteResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else if(projectFavoriteOptional.isPresent()){
            ProjectFavorite projectFavorite = new ProjectFavorite().builder()
                    .id(projectFavoriteOptional.get().getId())
                    .project(projectOptional.get())
                    .user(projectOptional.get().getUser())
                    .favorite(projectFavoriteRequest.isFavorite())
                    .build();
            ProjectFavorite projectFavoriteResult = projectFavoriteJpaRepository.save(projectFavorite);
            if(projectOptional.isPresent()) {
                List<ProjectFavorite> projectFavoriteList = projectFavoriteJpaRepository.findByProjectId(projectOptional.get().getId());
                projectOptional.get().setFavorite((int) projectFavoriteList.stream().filter(p -> p.isFavorite()).count());
                projectJpaRepository.save(projectOptional.get());
            }
            result.status = true;
            result.data = projectFavoriteResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }

        return response;
    }

    @Override
    public ResponseEntity<ProjectCommentResponse> projectGetComment(Long projectId) {
        ResponseEntity response;
        ProjectCommentResponse result = new ProjectCommentResponse();
        List<ProjectComment> projectCommentList = projectCommentJpaRepository.findByProjectId(projectId);

        if(projectCommentList.size()>=0){
            result.status = true;
            result.data = projectCommentList;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectCommentResponse> projectsignUpComment(ProjectCommentSignUpRequest projectCommentSignUpRequest) {
        ResponseEntity response;
        ProjectCommentResponse result = new ProjectCommentResponse();

        Optional<Project> projectOptional = projectJpaRepository.findById(projectCommentSignUpRequest.getProjectId());
        Optional<User> userOptional = userJpaRepository.findByEmail(projectCommentSignUpRequest.getEmail());
        if(projectOptional.isPresent()&&userOptional.isPresent()){
            Date now = new Date(System.currentTimeMillis());

            ProjectComment projectComment = new ProjectComment().builder()
                    .comment(projectCommentSignUpRequest.getComment())
                    .project(projectOptional.get())
                    .user(userOptional.get())
                    .updatedAt(now)
                    .build();

            ProjectComment projectCommentResult = projectCommentJpaRepository.save(projectComment);

            result.status = true;
            result.data = projectCommentResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectCommentResponse> projectupdateComment(ProjectCommentUpdateRequest projectCommentUpdateRequest) {
        ResponseEntity response;
        ProjectCommentResponse result = new ProjectCommentResponse();

       Optional<ProjectComment> projectCommentOptional = Optional.ofNullable(projectCommentJpaRepository.findByIdAndUserEmail(projectCommentUpdateRequest.getProjectCommentId(),projectCommentUpdateRequest.getEmail()));

        if(projectCommentOptional.isPresent()){
            Date now = new Date(System.currentTimeMillis());

            ProjectComment projectComment = new ProjectComment().builder()
                    .id(projectCommentOptional.get().getId())
                    .comment(projectCommentUpdateRequest.getComment())
                    .project(projectCommentOptional.get().getProject())
                    .user(projectCommentOptional.get().getUser())
                    .updatedAt(now)
                    .build();

            ProjectComment projectCommentResult = projectCommentJpaRepository.save(projectComment);

            result.status = true;
            result.data = projectCommentResult;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectCommentResponse> projectdeleteComment(ProjectCommentDeleteRequest projectCommentDeleteRequest) {
        ResponseEntity response;
        ProjectCommentResponse result = new ProjectCommentResponse();

        Optional<ProjectComment> projectCommentOptional = Optional.ofNullable(projectCommentJpaRepository.findByIdAndUserEmail(projectCommentDeleteRequest.getProjectCommentId(),projectCommentDeleteRequest.getEmail()));

        if(projectCommentOptional.isPresent()){
            projectCommentJpaRepository.delete(projectCommentOptional.get());

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }
}
