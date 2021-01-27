package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.MissionDoUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MissionTodoJpaRepository extends JpaRepository<MissionDoUsers,Long> {
    public List<MissionDoUsers> findByUserEmailAndMissionId(String userEmail, Long missionId);
    public List<MissionDoUsers> findByMissionId(Long missionId);
    public List<MissionDoUsers> findByUserEmail(String userEmail);

}
