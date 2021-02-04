package com.ssafy.edu.model.block;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class BlockMyResponse {
    // blockId, name, quantity
    Long blockId;
    String name;
    int quantity;
}
