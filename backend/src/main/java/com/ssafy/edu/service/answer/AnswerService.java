package com.ssafy.edu.service.answer;

import com.ssafy.edu.model.answer.Request.*;
import com.ssafy.edu.model.answer.Response.AnswerCommentResponse;
import com.ssafy.edu.model.answer.Response.AnswerFavoriteResponse;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import org.springframework.http.ResponseEntity;

public interface AnswerService {
    public ResponseEntity<AnswerPageResponse> findAll(AnswerSearchTypeRequest answerSearchTypeRequest);
    public ResponseEntity<AnswerResponse> findGetOne(String userEmail, Long missionId);
    public ResponseEntity<AnswerResponse> findGetOneByUserId(String userEmail);
    public ResponseEntity<AnswerResponse> signUpProject(AnswerSignupRequest answerSignupRequest);
    public ResponseEntity<AnswerResponse> updateProject(AnswerUpdateRequest answerUpdateRequest);
    public ResponseEntity<AnswerResponse> deleteProject(AnswerDeleteRequest answerDeleteRequest);
    public ResponseEntity<AnswerFavoriteResponse> projectFavorite(AnswerFavoriteRequest answerFavoriteRequest);
    public ResponseEntity<AnswerCommentResponse> projectGetComment(Long answerId);
    public ResponseEntity<AnswerCommentResponse> projectsignUpComment(AnswerCommentSignUpRequest answerCommentSignUpRequest);
    public ResponseEntity<AnswerCommentResponse> projectupdateComment(AnswerCommentUpdateRequest answerCommentUpdateRequest);
    public ResponseEntity<AnswerCommentResponse> projectdeleteComment(AnswerCommentDeleteRequest answerCommentDeleteRequest);
}
