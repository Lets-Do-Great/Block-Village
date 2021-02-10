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
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class Challenge{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "challenge_id")
    private Long id;

    private String title;

    private String image;

    private String startDate;

    private String endDate;

    private Long peopleCnt;

    private Boolean finish;

    @Builder.Default
    @OneToMany(mappedBy = "challenge")
    List<ChallengeUser> challengeUsers = new ArrayList<>();
}
