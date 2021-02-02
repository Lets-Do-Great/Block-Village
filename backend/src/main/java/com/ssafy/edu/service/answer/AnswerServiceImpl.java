package com.ssafy.edu.service.answer;

import com.ssafy.edu.model.answer.Answer;
import com.ssafy.edu.model.answer.Request.*;
import com.ssafy.edu.model.answer.Response.AnswerCommentResponse;
import com.ssafy.edu.model.answer.Response.AnswerFavoriteResponse;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import com.ssafy.edu.repository.UserJpaRepository;
import com.ssafy.edu.repository.answer.AnswerCommentJpaRepository;
import com.ssafy.edu.repository.answer.AnswerFavoriteJapRepository;
import com.ssafy.edu.repository.answer.AnswerJapRepository;
import com.ssafy.edu.repository.mission.MissionJpaRepository;
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
public class AnswerServiceImpl implements AnswerService{

    @Autowired
    AnswerJapRepository answerJapRepository;

    @Autowired
    UserJpaRepository userJpaRepository;

    @Autowired
    MissionJpaRepository missionJpaRepository;

    @Autowired
    AnswerCommentJpaRepository answerCommentJpaRepository;

    @Autowired
    AnswerFavoriteJapRepository answerFavoriteJapRepository;


    @Override
    public ResponseEntity<AnswerPageResponse> findAll(AnswerSearchTypeRequest answerSearchTypeRequest) {
        ResponseEntity response;
        AnswerPageResponse result = new AnswerPageResponse();
        List<Object> resultObject = new ArrayList<>();
        Page<Answer> answerList = null;

        if(answerSearchTypeRequest.getKeywordType().equals("title")){
            if(answerSearchTypeRequest.getSortType().equals("increase")){
                answerList = answerJapRepository.findByTitleContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(),3, Sort.by(answerSearchTypeRequest.getSearchType())));
            }else if(answerSearchTypeRequest.getSortType().equals("decrease")){
                answerList = answerJapRepository.findByTitleContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(),3, Sort.by(answerSearchTypeRequest.getSearchType()).descending()));
            }
        }else if(answerSearchTypeRequest.getKeywordType().equals("user")){
            if(answerSearchTypeRequest.getSortType().equals("increase")){
                answerList = answerJapRepository.findByUserNicknameContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(),3, Sort.by(answerSearchTypeRequest.getSearchType())));
            }else if(answerSearchTypeRequest.getSortType().equals("decrease")){
                answerList = answerJapRepository.findByUserNicknameContaining(answerSearchTypeRequest.getKeyword(), PageRequest.of(answerSearchTypeRequest.getPageNum(),3, Sort.by(answerSearchTypeRequest.getSearchType()).descending()));

            }
        }
        resultObject.add(answerList);
        result.status = true;
        result.data = resultObject;
        response = new ResponseEntity<>(result, HttpStatus.OK);
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> findGetOne(String userEmail, Long missionId) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        Optional<Answer> answerOptional = answerJapRepository.findByMissionId(missionId);

        if(answerOptional.isPresent()){
            answerOptional.get().setView(answerOptional.get().getView()+1);
            Answer answer = answerJapRepository.save(answerOptional.get());

            result.status = true;
            result.data = answer;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }else {
            result.status = false;
            response = new ResponseEntity<>(result, HttpStatus.OK);
        }
        return response;
    }

    @Override
    public ResponseEntity<AnswerResponse> findGetOneByUserId(String userEmail) {
        ResponseEntity response;
        AnswerResponse result = new AnswerResponse();

        List<Answer> answerOptional = answerJapRepository.findByUserEmail(userEmail);

        if(answerOptional.size()>=0)

        return null;
    }

    @Override
    public ResponseEntity<AnswerResponse> signUpProject(AnswerSignupRequest answerSignupRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerResponse> updateProject(AnswerUpdateRequest answerUpdateRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerResponse> deleteProject(AnswerDeleteRequest answerDeleteRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerFavoriteResponse> projectFavorite(AnswerFavoriteRequest answerFavoriteRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> projectGetComment(Long answerId) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> projectsignUpComment(AnswerCommentSignUpRequest answerCommentSignUpRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> projectupdateComment(AnswerCommentUpdateRequest answerCommentUpdateRequest) {
        return null;
    }

    @Override
    public ResponseEntity<AnswerCommentResponse> projectdeleteComment(AnswerCommentDeleteRequest answerCommentDeleteRequest) {
        return null;
    }
}
