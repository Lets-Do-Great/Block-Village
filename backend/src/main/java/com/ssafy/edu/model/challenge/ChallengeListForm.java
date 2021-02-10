package com.ssafy.edu.model.challenge;


import lombok.*;


@Getter
@Setter
@Builder
public class ChallengeListForm {
    Long challengeId;
    String title;
    String image;
    String startDate;
    String endDate;
    Long peopleCnt;
    Boolean finish;
}
