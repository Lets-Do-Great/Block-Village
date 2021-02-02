package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Project;
import com.ssafy.edu.model.project.ProjectFavorite;
import com.ssafy.edu.model.project.Request.*;
import com.ssafy.edu.model.project.Response.ProjectFavoriteResponse;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
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
            result.status = true;
            result.data = projectOptional.get();
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
            result.data = projectJpaRepository.findByUserEmail(userOptional.get().getEmail());
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

        Optional<Project> projectOptional = projectJpaRepository.findByIdAndUserEmail(projectFavoriteRequest.getProjectId(),projectFavoriteRequest.getEmail());
        Optional<ProjectFavorite> projectFavoriteOptional = Optional.ofNullable(projectFavoriteJpaRepository.findByUserEmailAndProjectId(projectOptional.get().getUser().getEmail(),projectOptional.get().getId()));

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
}
