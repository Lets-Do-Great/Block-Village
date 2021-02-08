package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Project;
import com.ssafy.edu.model.project.ProjectComment;
import com.ssafy.edu.model.project.ProjectFavorite;
import com.ssafy.edu.model.project.Request.*;
import com.ssafy.edu.model.project.Response.Model.findAllCommentModel;
import com.ssafy.edu.model.project.Response.Model.findAllModel;
import com.ssafy.edu.model.project.Response.Model.findOneModel;
import com.ssafy.edu.model.project.Response.Model.pageModel;
import com.ssafy.edu.model.project.Response.ProjectCommentResponse;
import com.ssafy.edu.model.project.Response.ProjectFavoriteResponse;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.project.ProjectCommentJpaRepository;
import com.ssafy.edu.repository.project.ProjectFavoriteJpaRepository;
import com.ssafy.edu.repository.project.ProjectJpaRepository;
import com.ssafy.edu.service.s3Service.S3ServiceImpl;
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
    @Autowired
    S3ServiceImpl s3Service;

    @Override
    public ResponseEntity<ProjectPageResponse> findAll(ProjectSearchTypeRequest projectSearchTypeRequest) {
        ResponseEntity response;
        ProjectPageResponse result = new ProjectPageResponse();
        List<Object> resultObject = new ArrayList<>();
        Page<Project> projectList = null;

        if(projectSearchTypeRequest.getKeywordType().equals("title")){
            if(projectSearchTypeRequest.getSortType().equals("increase")){
                projectList = projectJpaRepository.findByTitleContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),20, Sort.by(projectSearchTypeRequest.getSearchType())));
            }else if(projectSearchTypeRequest.getSortType().equals("decrease")){
                projectList = projectJpaRepository.findByTitleContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),20, Sort.by(projectSearchTypeRequest.getSearchType()).descending()));
            }
        }else if(projectSearchTypeRequest.getKeywordType().equals("user")){
            if(projectSearchTypeRequest.getSortType().equals("increase")){
                projectList = projectJpaRepository.findByUserNicknameContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),20, Sort.by(projectSearchTypeRequest.getSearchType())));
            }else if(projectSearchTypeRequest.getSortType().equals("decrease")){
                projectList = projectJpaRepository.findByUserNicknameContaining(projectSearchTypeRequest.getKeyword(), PageRequest.of(projectSearchTypeRequest.getPageNum(),20, Sort.by(projectSearchTypeRequest.getSearchType()).descending()));
            }
        }
        List<findAllModel> findAllModelList = new ArrayList<>();
        for(Project project : projectList){
            findAllModel findModel = new findAllModel().builder()
                    .id(project.getId())
                    .email(project.getUser().getEmail())
                    .title(project.getTitle())
                    .blockCnt(project.getBlockCnt())
                    .imageUrl(project.getProjectImg())
                    .readCnt(project.getView())
                    .likeCnt(project.getFavorite())
                    .commentCnt(project.getProjectCommentList().size())
                    .build();

            findAllModelList.add(findModel);
        }

        pageModel pageModel = new pageModel().builder()
                .pageisFirst(projectList.isFirst())
                .pageSize(projectList.getNumberOfElements())
                .pageNumber(projectList.getNumber())
                .pageTotalPages(projectList.getTotalPages())
                .pageTotalElements((int)projectList.getTotalElements())
                .build();
        resultObject.add(findAllModelList);
        resultObject.add(pageModel);

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
        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

        if(projectOptional.isPresent()&userOptional.isPresent()){

            projectOptional.get().setView(projectOptional.get().getView()+1);
            Project project = projectJpaRepository.save(projectOptional.get());

            Optional<ProjectFavorite> projectFavorite = Optional.ofNullable(projectFavoriteJpaRepository.findByUserEmailAndProjectId(userOptional.get().getEmail(),project.getId()));

            findOneModel findOneModel = new findOneModel().builder()
                    .id(project.getId())
                    .email(project.getUser().getEmail())
                    .nickname(project.getUser().getNickname())
                    .title(project.getTitle())
                    .blockCnt(project.getBlockCnt())
                    .created_at(project.getCreatedAt())
                    .updated_at(project.getUpdatedAt())
                    .content(project.getContent())
                    .imageUrl(project.getProjectImg())
                    .javascriptCode(project.getJavascriptCode())
                    .xmlCode(project.getXmlCode())
                    .readCnt(project.getView())
                    .likeCnt(project.getFavorite())
                    .commentCnt(project.getProjectCommentList().size())
                    .favorite((projectFavorite.orElseGet(ProjectFavorite::new).isFavorite()))
                    .build();

            result.status = true;
            result.data = findOneModel;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<ProjectResponse> findGetByUserId(String userEmail) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();

        Optional<User> userOptional = userJpaRepository.findByEmail(userEmail);

        if(userOptional.isPresent()){
            List<findAllModel> findAllModelList = new ArrayList<>();
            List<Project> projectList = projectJpaRepository.findByUserEmailOrderByUpdatedAtDesc(userOptional.get().getEmail());

            for(Project project:projectList){
                findAllModel findModel = new findAllModel().builder()
                        .id(project.getId())
                        .email(project.getUser().getEmail())
                        .title(project.getTitle())
                        .blockCnt(project.getBlockCnt())
                        .imageUrl(project.getProjectImg())
                        .readCnt(project.getView())
                        .likeCnt(project.getFavorite())
                        .commentCnt(project.getProjectCommentList().size())
                        .build();

                findAllModelList.add(findModel);
            }

            result.status = true;
            result.data = findAllModelList;
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
            Optional<ProjectFavorite> projectFavorite = Optional.ofNullable(projectFavoriteJpaRepository.findByUserEmailAndProjectId(userOptional.get().getEmail(), projectResult.getId()));

            findOneModel findOneModel = new findOneModel().builder()
                    .id(projectResult.getId())
                    .email(projectResult.getUser().getEmail())
                    .nickname(projectResult.getUser().getNickname())
                    .title(projectResult.getTitle())
                    .blockCnt(projectResult.getBlockCnt())
                    .created_at(projectResult.getCreatedAt())
                    .updated_at(projectResult.getUpdatedAt())
                    .content(projectResult.getContent())
                    .imageUrl(projectResult.getProjectImg())
                    .javascriptCode(projectResult.getJavascriptCode())
                    .xmlCode(projectResult.getXmlCode())
                    .readCnt(projectResult.getView())
                    .likeCnt(projectResult.getFavorite())
                    .commentCnt(0)
                    .favorite((projectFavorite.orElseGet(ProjectFavorite::new).isFavorite()))
                    .build();

            result.status = true;
            result.data = findOneModel;
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
            Optional<ProjectFavorite> projectFavorite = Optional.ofNullable(projectFavoriteJpaRepository.findByUserEmailAndProjectId(projectResult.getUser().getEmail(), projectResult.getId()));

            findOneModel findOneModel = new findOneModel().builder()
                    .id(projectResult.getId())
                    .email(projectResult.getUser().getEmail())
                    .nickname(projectResult.getUser().getNickname())
                    .title(projectResult.getTitle())
                    .blockCnt(projectResult.getBlockCnt())
                    .created_at(projectResult.getCreatedAt())
                    .updated_at(projectResult.getUpdatedAt())
                    .content(projectResult.getContent())
                    .imageUrl(projectResult.getProjectImg())
                    .javascriptCode(projectResult.getJavascriptCode())
                    .xmlCode(projectResult.getXmlCode())
                    .readCnt(projectResult.getView())
                    .likeCnt(projectResult.getFavorite())
                    .commentCnt(projectResult.getProjectCommentList().size())
                    .favorite((projectFavorite.orElseGet(ProjectFavorite::new).isFavorite()))
                    .build();

            result.status = true;
            result.data = findOneModel;
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
                    .user(userOptional.get())
                    .favorite(projectFavoriteRequest.isFavorite())
                    .build();

            projectFavoriteJpaRepository.save(projectFavorite);

            if(projectOptional.isPresent()) {
                List<ProjectFavorite> projectFavoriteList = projectFavoriteJpaRepository.findByProjectId(projectOptional.get().getId());
                projectOptional.get().setFavorite((int) projectFavoriteList.stream().filter(p -> p.isFavorite()).count());
                projectJpaRepository.save(projectOptional.get());
            }

            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);

        }else if(projectFavoriteOptional.isPresent()){

            ProjectFavorite projectFavorite = projectFavoriteOptional.get();
            projectFavorite.setFavorite(projectFavoriteRequest.isFavorite());

            projectFavoriteJpaRepository.save(projectFavorite);

            if(projectOptional.isPresent()) {
                List<ProjectFavorite> projectFavoriteList = projectFavoriteJpaRepository.findByProjectId(projectOptional.get().getId());
                projectOptional.get().setFavorite((int) projectFavoriteList.stream().filter(p -> p.isFavorite()).count());
                projectJpaRepository.save(projectOptional.get());
            }
            result.status = true;
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
            List<findAllCommentModel> findAllCommentModelList = new ArrayList<>();

            for(ProjectComment projectComment : projectCommentList){
                findAllCommentModel findAllCommentModel = new findAllCommentModel().builder()
                        .id(projectComment.getId())
                        .email(projectComment.getUser().getEmail())
                        .nickname(projectComment.getUser().getNickname())
                        .comment(projectComment.getComment())
                        .updated_at(projectComment.getUpdatedAt())
                        .build();
                findAllCommentModelList.add(findAllCommentModel);
            }

            result.status = true;
            result.data = findAllCommentModelList;
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

            projectCommentJpaRepository.save(projectComment);

            result.status = true;
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

            projectCommentJpaRepository.save(projectComment);

            result.status = true;
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

    @Override
    public ResponseEntity<ProjectResponse> uploadMissionImage(String userEmail, Long projectId, String imagePath) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();

        Optional<Project> projectOptional = projectJpaRepository.findById(projectId);

        if(projectOptional.isPresent()){
            Project project = projectOptional.get();
            project.setProjectImg("https://" + s3Service.CLOUD_FRONT_DOMAIN_NAME + "/" + imagePath);

            projectJpaRepository.save(project);
            result.status = true;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }
}
