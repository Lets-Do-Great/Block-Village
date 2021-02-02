package com.ssafy.edu.repository.answer;

import com.ssafy.edu.model.answer.AnswerComment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerCommentJpaRepository extends JpaRepository<AnswerComment,Long> {
    public List<AnswerComment> findByaAnswerId(Long answerId);
    public AnswerComment findByIdAndUserEmail(Long answerId, String userEmail);
}
