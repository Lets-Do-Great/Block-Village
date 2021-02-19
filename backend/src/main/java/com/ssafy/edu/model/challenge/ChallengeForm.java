package com.ssafy.edu.model.challenge;


import lombok.*;

import javax.validation.Valid;


@Getter
@Setter
@Builder
@Valid
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeForm {
    Long challengeId;
    String title;
    String image;
    String startDate;
    String endDate;
    Long peopleCnt;
    Boolean finish;
    String todo;
    int startPositionX;
    int startPositionY;
    int endPositionX;
    int endPositionY;
}
