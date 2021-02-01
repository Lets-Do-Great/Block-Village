package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.MissionDifficulty;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MissionDifficultyJpaRepository  extends JpaRepository<MissionDifficulty,Long> {
    public MissionDifficulty findByUserEmailAndMissionId(String userEmail, Long missionId);
    public List<MissionDifficulty> findByMissionId(Long missionId);
    public MissionDifficulty findByUserEmail(String userEmail);

}
