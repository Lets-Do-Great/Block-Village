package com.ssafy.edu.repository.mission;

import com.ssafy.edu.model.mission.Mission;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MissionJpaRepository extends JpaRepository<Mission,Long> {
    public List<Mission> findAll();
    public Optional<Mission> findById(Long missionId);
    public Optional<Mission> findByIdAndUserEmail(Long missionId,String email);
    public List<Mission> findByUserNickname(String userNickname,Sort sort);
    public List<Mission> findByTitleContaining(String missionTitle, Sort sort);
    public Optional<Mission> findByUserId(Long userId);
    public void delete(Mission mission);
}
