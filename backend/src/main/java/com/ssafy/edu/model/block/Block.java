package com.ssafy.edu.model.block;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
* id : 블록 pk
* name : 블록의 이름
* type : 블록의 type
* price : 블록의 가격
* */

@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
@Entity
public class Block {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "block_id")
    private Long id;

    private String name;

    private String category;

    private int price;

    @Builder.Default
    @OneToMany(mappedBy = "block")
    List<BlockUsers> blockUsers = new ArrayList<>();

}
