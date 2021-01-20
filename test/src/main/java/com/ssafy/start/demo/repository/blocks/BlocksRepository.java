package com.ssafy.start.demo.repository.blocks;

import com.ssafy.start.demo.model.blocks.Blocks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlocksRepository extends JpaRepository<Blocks,Long> {
    public List<Blocks> findByUsersId(Long userid);
}
