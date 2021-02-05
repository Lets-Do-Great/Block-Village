package com.ssafy.edu.repository;


import com.ssafy.edu.model.challenge.Challenge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChallengeJpaRepository extends JpaRepository<Challenge, Long> {
    public Optional<Challenge> findById(Long id);
}
