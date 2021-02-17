package com.ssafy.edu.model.block;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BlockCategoryResult {
    List<BlockResult> 시작;
    List<BlockResult> 판단;
    List<BlockResult> 움직임;
    List<BlockResult> 흐름;
    List<BlockResult> 계산;
    List<BlockResult> 함수;
}
