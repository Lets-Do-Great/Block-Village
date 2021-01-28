package com.ssafy.edu.repository;

import com.ssafy.edu.model.board.Board;
import com.ssafy.edu.model.board.BoardComment;
import com.ssafy.edu.model.board.BoardLikeUsers;
import com.ssafy.edu.model.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

public interface BoardLikeUsersJpaRepository extends JpaRepository<BoardLikeUsers, Long> {
    public Optional<BoardLikeUsers> findByBoardAndUser(Board board, User user);
    @Transactional
    public void deleteAllByBoard(Board board);
}
