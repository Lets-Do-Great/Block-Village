package com.ssafy.edu.repository;


import com.ssafy.edu.model.challenge.Challenge;
import com.ssafy.edu.model.challenge.ChallengeUser;
import com.ssafy.edu.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ChallengeUsersJpaRepository extends JpaRepository<ChallengeUser, Long> {
    public List<ChallengeUser> findByUserAndDone(User user, int done);
    public Optional<ChallengeUser> findByChallenge(Challenge Challenge);
}
