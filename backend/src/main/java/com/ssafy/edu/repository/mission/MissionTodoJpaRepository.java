package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.MissionDoUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MissionTodoJpaRepository extends JpaRepository<MissionDoUsers,Long> {
    public MissionDoUsers findByUserEmailAndMissionId(String userEmail, Long missionId);
    public List<MissionDoUsers> findByMissionId(Long missionId);
    public MissionDoUsers findByUserEmail(String userEmail);

}
