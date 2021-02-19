package com.ssafy.edu.model.block;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BlockMyResult {
    BlockMyResponse start;
    BlockMyResponse judgement;
    BlockMyResponse movement;
    BlockMyResponse flow;
    BlockMyResponse calculation;
    BlockMyResponse function;
}
