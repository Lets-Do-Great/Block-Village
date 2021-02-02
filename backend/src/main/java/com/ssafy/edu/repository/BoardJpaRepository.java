package com.ssafy.edu.repository;

import com.ssafy.edu.model.board.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
    public Optional<Board> findById(Long id);
    @Transactional
    public void deleteById(Long id);
}
