package com.ssafy.edu.model.block;


import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BlockMyResponse {
    String name;
    String colour;
    List<BlockType> blocks;
}