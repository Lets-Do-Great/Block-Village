package com.ssafy.edu.service.answer;

import com.ssafy.edu.model.answer.Request.*;
import com.ssafy.edu.model.answer.Response.AnswerCommentResponse;
import com.ssafy.edu.model.answer.Response.AnswerFavoriteResponse;
import com.ssafy.edu.model.answer.Response.AnswerPageResponse;
import com.ssafy.edu.model.answer.Response.AnswerResponse;
import org.springframework.http.ResponseEntity;

public interface AnswerService {
    public ResponseEntity<AnswerPageResponse> findAll(AnswerSearchTypeRequest answerSearchTypeRequest);
    public ResponseEntity<AnswerResponse> findGetList(Long missionId);
    public ResponseEntity<AnswerResponse> findGetOne(String userEmail,Long answerId);
    public ResponseEntity<AnswerResponse> findGetOneByUserId(String userEmail);
    public ResponseEntity<AnswerResponse> signUpAnswer(AnswerSignupRequest answerSignupRequest);
    public ResponseEntity<AnswerResponse> updateAnswer(AnswerUpdateRequest answerUpdateRequest);
    public ResponseEntity<AnswerResponse> deleteAnswer(AnswerDeleteRequest answerDeleteRequest);
    public ResponseEntity<AnswerFavoriteResponse> answerFavorite(AnswerFavoriteRequest answerFavoriteRequest);
    public ResponseEntity<AnswerCommentResponse> answerfindGetComment(Long answerId);
    public ResponseEntity<AnswerCommentResponse> answersignUpComment(AnswerCommentSignUpRequest answerCommentSignUpRequest);
    public ResponseEntity<AnswerCommentResponse> answerupdateComment(AnswerCommentUpdateRequest answerCommentUpdateRequest);
    public ResponseEntity<AnswerCommentResponse> answerdeleteComment(AnswerCommentDeleteRequest answerCommentDeleteRequest);
}
