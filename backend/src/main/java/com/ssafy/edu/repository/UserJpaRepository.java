package com.ssafy.edu.repository;

import com.ssafy.edu.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository // 생략 가능
public interface UserJpaRepository extends JpaRepository<User, Long> {

    public Optional<User> findByEmailAndPassword(String email, String password);
    public Optional<User> findByEmail(String email);
    public void delete(User user);

}
