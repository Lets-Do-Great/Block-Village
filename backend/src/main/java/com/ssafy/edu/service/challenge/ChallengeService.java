package com.ssafy.edu.service.challenge;

import com.ssafy.edu.model.challenge.ChallengeResponse;
import com.ssafy.edu.model.challenge.ChallengeUserRequest;
import org.springframework.http.ResponseEntity;

public interface ChallengeService {
    public ResponseEntity<ChallengeResponse> getChallengeList();
    public ResponseEntity<ChallengeResponse> getUserChallengeList(ChallengeUserRequest challengeUserRequest);
    public ResponseEntity<ChallengeResponse> joinChallenge(ChallengeUserRequest challengeUserRequest, Long challengeId);
}
