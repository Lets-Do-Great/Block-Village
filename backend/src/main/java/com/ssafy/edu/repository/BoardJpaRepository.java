package com.ssafy.edu.repository;

import com.ssafy.edu.model.board.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;
import java.util.List;

public interface BoardJpaRepository extends JpaRepository<Board, Long> {
    public Page<Board> findAll(Pageable pageable);
    public Optional<Board> findById(Long id);
    public Page<Board> findByTitleContaining(Pageable pageable,String keyword);
    public Page<Board> findByContentContaining(Pageable pageable,String keyword);
    @Transactional
    public void deleteById(Long id);
}
