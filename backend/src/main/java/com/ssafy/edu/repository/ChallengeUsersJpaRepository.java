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
    public List<ChallengeUser> findByUserAndDone(User user, String done);
//    public Optional<ChallengeUser> findByUserAndChallenge(User user, Challenge challenge);
    public Optional<ChallengeUser> findByChallengeAndUser(Challenge challenge, User user);
}
