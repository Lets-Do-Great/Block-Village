package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.MissionFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MissionFavoriteJpaRepository extends JpaRepository<MissionFavorite,Long> {
    public MissionFavorite findByUserEmailAndMissionId(String userEmail, Long missionId);
    public List<MissionFavorite> findByMissionId(Long missionId);
    public MissionFavorite findByUserEmail(String userEmail);
}
