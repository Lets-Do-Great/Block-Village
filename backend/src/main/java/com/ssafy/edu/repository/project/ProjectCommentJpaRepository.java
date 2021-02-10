package com.ssafy.edu.repository.project;

import com.ssafy.edu.model.project.ProjectComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.List;

@Repository
public interface ProjectCommentJpaRepository extends JpaRepository<ProjectComment,Long> {
    public List<ProjectComment> findByProjectId(Long projectCommentId);
    public ProjectComment findByIdAndUserEmail(Long projectCommentId, String userEmail);

}
