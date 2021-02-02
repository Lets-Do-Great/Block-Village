package com.ssafy.edu.repository.answer;

import com.ssafy.edu.model.answer.AnswerFavorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerFavoriteJapRepository extends JpaRepository<AnswerFavorite,Long> {
    public AnswerFavorite findByUserEmailAndAnswerId(String userEmail,Long answerId);
    public List<AnswerFavorite> findByAnswerId(Long answerId);
}
