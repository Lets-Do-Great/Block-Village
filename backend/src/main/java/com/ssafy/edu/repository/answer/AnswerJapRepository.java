package com.ssafy.edu.repository.answer;

import com.ssafy.edu.model.answer.Answer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AnswerJapRepository extends JpaRepository<Answer,Long> {
    public List<Answer> findAll();
    public Optional<Answer> findById(Long answerId);
    public List<Answer> findByMissionIdOrderByUpdatedAtDesc(Long missionId);
    public Optional<Answer> findByIdAndMissionId(Long answerId,Long missionId);
    public Optional<Answer> findByIdAndUserEmail(Long answerId, String email);
    public Page<Answer> findByUserNicknameContaining(String userNickname, Pageable pageable);
    public Page<Answer> findByTitleContaining(String answerTitle,  Pageable pageable);
    public List<Answer> findByUserEmailOrderByUpdatedAtDesc(String userEmail);
    public void delete(Answer project);
}
