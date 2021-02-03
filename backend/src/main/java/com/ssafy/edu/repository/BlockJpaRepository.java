package com.ssafy.edu.repository;


import com.ssafy.edu.model.block.Block;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BlockJpaRepository extends JpaRepository<Block, Long> {
    public Optional<Block> findById(Long id);
    public Optional<Block> findByCategory(String category);
}
