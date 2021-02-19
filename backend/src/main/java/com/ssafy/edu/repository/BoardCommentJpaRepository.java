package com.ssafy.edu.repository;

import com.ssafy.edu.model.board.Board;
import com.ssafy.edu.model.board.BoardComment;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

public interface BoardCommentJpaRepository extends JpaRepository<BoardComment, Long> {
    @Transactional
    public void deleteAllByBoard(Board board);
    @Transactional
    public void deleteById(Long cid);
}
