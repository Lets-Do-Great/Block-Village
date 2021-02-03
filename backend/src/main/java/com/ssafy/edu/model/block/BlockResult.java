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
    List<List> blockList;
}
