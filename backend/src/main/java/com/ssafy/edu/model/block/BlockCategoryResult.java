package com.ssafy.edu.model.block;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BlockCategoryResult {
    List<BlockResult> calculation;
    List<BlockResult> drawing;
    List<BlockResult> flow;
    List<BlockResult> function;
    List<BlockResult> judgement;
    List<BlockResult> movement;
    List<BlockResult> start;
}
