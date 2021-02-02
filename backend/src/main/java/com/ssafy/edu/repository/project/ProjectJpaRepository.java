package com.ssafy.edu.repository.project;

import com.ssafy.edu.model.project.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectJpaRepository extends JpaRepository<Project,Long> {
    public List<Project> findAll();
    public Optional<Project> findById(Long projectId);
    public Optional<Project> findByIdAndUserEmail(Long projectId,String email);
    public Page<Project> findByUserNicknameContaining(String userNickname, Pageable pageable);
    public Page<Project> findByTitleContaining(String missionTitle,  Pageable pageable);
    public List<Project> findByUserEmail(String userEmail);
    public void delete(Project project);
}
