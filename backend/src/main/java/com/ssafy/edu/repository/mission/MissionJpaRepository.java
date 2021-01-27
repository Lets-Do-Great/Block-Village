package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.Mission;

import com.ssafy.edu.model.mission.MissionResponse;
import com.ssafy.edu.model.mission.MissionSignUpRequest;
import com.ssafy.edu.model.mission.MissionUpdateRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MissionJpaRepository extends JpaRepository<Mission,Long> {
    public List<Mission> findAll();
    public Optional<Mission> findById(Long missionId);
    public List<Mission> findByUserNickname(String userNickname,Sort sort);
    public List<Mission> findByTitleContaining(String missionTitle, Sort sort);
    public Optional<Mission> findByUserId(Long userId);
    public void delete(Mission mission);
}
