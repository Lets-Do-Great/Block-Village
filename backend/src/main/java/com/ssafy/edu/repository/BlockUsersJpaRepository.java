package com.ssafy.edu.repository;

import com.ssafy.edu.model.block.Block;
import com.ssafy.edu.model.block.BlockUsers;
import com.ssafy.edu.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BlockUsersJpaRepository extends JpaRepository<BlockUsers, Long> {
    public Optional<BlockUsers> findByTypeAndEmail(String type, String email);
}
