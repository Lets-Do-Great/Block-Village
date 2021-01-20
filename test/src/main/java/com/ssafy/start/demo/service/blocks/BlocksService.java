package com.ssafy.start.demo.service.blocks;

import com.ssafy.start.demo.model.blocks.Blocks;

import java.util.List;

public interface BlocksService {
    List<Blocks> findAll();
    List<Blocks> findByUsersId(Long userid);
}
