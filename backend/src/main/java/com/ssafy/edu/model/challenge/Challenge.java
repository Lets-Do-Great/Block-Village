package com.ssafy.edu.model.challenge;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.edu.model.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class Challenge extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_id")
    private Long id;

    @Lob
    private String title;

    @Lob
    private String image;

    @Lob
    private String StartDate;

    @Lob
    private String EndDate;

    private Long peopleCnt;

    @OneToMany(mappedBy = "user")
    List<ChallengeUser> challengeUsers = new ArrayList<>();
}
