package com.ssafy.edu.repository.project;

import com.ssafy.edu.model.project.ProjectFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProjectFavoriteJpaRepository extends JpaRepository<ProjectFavorite,Long> {
    public ProjectFavorite findByUserEmailAndProjectId(String userEmail,Long projectId);
    public List<ProjectFavorite> findByProjectId(Long projectId);
}
