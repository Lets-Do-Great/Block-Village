package com.ssafy.edu.service.project;

import com.ssafy.edu.model.project.Project;
import com.ssafy.edu.model.project.Request.ProjectSearchTypeRequest;
import com.ssafy.edu.model.project.Request.ProjectSignUpRequest;
import com.ssafy.edu.model.project.Response.ProjectPageResponse;
import com.ssafy.edu.model.project.Response.ProjectResponse;
import com.ssafy.edu.model.user.User;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.project.ProjectJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService{

    @Autowired
    ProjectJpaRepository projectJpaRepository;
    @Autowired
    UserJpaRepository userJpaRepository;

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
    public ResponseEntity<ProjectResponse> signUpProject(ProjectSignUpRequest projectSignUpRequest) {
        ResponseEntity response;
        ProjectResponse result = new ProjectResponse();
        Optional<User> userOptional = userJpaRepository.findByEmail(projectSignUpRequest.getEmail());
        if(userOptional.isPresent()){

        }
        return response;
    }
}
