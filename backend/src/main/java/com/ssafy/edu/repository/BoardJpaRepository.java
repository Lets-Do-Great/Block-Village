package com.ssafy.edu.repository;

import com.ssafy.edu.model.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
    public Optional<Board> findById(Long id);
    public void deleteById(Long id);
}
