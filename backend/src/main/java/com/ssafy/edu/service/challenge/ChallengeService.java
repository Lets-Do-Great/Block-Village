package com.ssafy.edu.service.challenge;

import com.ssafy.edu.model.challenge.ChallengeResponse;
import com.ssafy.edu.model.challenge.ChallengeUserRequest;
import org.springframework.http.ResponseEntity;

public interface ChallengeService {
    public ResponseEntity<ChallengeResponse> getChallengeList(String email);
    public ResponseEntity<ChallengeResponse> getUserChallengeList(String email, String todo);
    public ResponseEntity<ChallengeResponse> joinChallenge(ChallengeUserRequest challengeUserRequest);
}
