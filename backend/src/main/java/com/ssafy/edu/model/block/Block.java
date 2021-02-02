package com.ssafy.edu.model.block;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;

@Getter @Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
@Entity
public class Block {
    @Id @GeneratedValue
    private Long id;

    @Lob
    private String name;

    @Lob
    private String type;

    @Lob
    private int price;
}
