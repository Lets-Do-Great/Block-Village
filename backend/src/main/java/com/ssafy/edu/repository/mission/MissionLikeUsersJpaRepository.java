package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.Mission;
import com.ssafy.edu.model.mission.MissionLikeUsers;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MissionLikeUsersJpaRepository extends JpaRepository<MissionLikeUsers,Long> {
    public List<MissionLikeUsers> findByUserEmailAndMissionId(String userEmail,Long missionId);
}
