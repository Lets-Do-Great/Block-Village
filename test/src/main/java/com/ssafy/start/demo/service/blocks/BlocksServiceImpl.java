package com.ssafy.start.demo.service.blocks;

import com.ssafy.start.demo.model.blocks.Blocks;
import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.repository.blocks.BlocksRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Slf4j
@Service
public class BlocksServiceImpl implements BlocksService{
    @Autowired
    BlocksRepository blocksRepository;

    @Override
    public List<Blocks> findAll() {
        List<Blocks> blockList = new ArrayList<>();
        blocksRepository.findAll().forEach(e -> {
            log.info(e.toString());
            blockList.add(e);
        });
        return blockList;
    }

    @Override
    public List<Blocks> findByUsersId(Long userid) {
        List<Blocks> blockList = new ArrayList<>();
        blocksRepository.findByUsersId(userid).forEach(e -> {
            log.info(e.toString());
            blockList.add(e);
        });
        return blockList;
    }
}
