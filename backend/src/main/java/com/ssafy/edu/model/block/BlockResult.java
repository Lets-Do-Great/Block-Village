package com.ssafy.edu.model.block;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

// 변경하기

@Getter
@Setter
public class BlockResult {

    String name;
    String category;
    int price;
    // 임시
    List<Block> calculation;
    List<Block> drawing;
    List<Block> flow;
    List<Block> function;
    List<Block> judgement;
    List<Block> movement;
    List<Block> start;

}
