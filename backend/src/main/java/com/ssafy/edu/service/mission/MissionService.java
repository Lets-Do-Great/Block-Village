package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.Mission;
import com.ssafy.edu.model.mission.MissionResponse;
import com.ssafy.edu.model.mission.MissionSignUpRequest;
import com.ssafy.edu.model.mission.MissionUpdateRequest;
import com.ssafy.edu.model.user.UserResponse;
import org.springframework.http.ResponseEntity;

public interface MissionService {
    public ResponseEntity<MissionResponse> findAll(String searchType, String sortType);
    public ResponseEntity<MissionResponse> findById(Long missionId);
    public ResponseEntity<MissionResponse> findByUserId(Long userId);
    public ResponseEntity<MissionResponse> signUpMission(MissionSignUpRequest missionSignUpRequest);
    public ResponseEntity<MissionResponse> updateMission(MissionUpdateRequest missionUpdateRequest);
    public ResponseEntity<MissionResponse> deleteMission(Long missionId);
}