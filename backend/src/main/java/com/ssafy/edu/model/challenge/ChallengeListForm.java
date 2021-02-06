package com.ssafy.edu.model.challenge;


import io.swagger.annotations.ApiModelProperty;
import lombok.*;


@Getter
@Setter
@Builder
public class ChallengeListForm {
    Long challengeId;
    String title;
    String Image;
    String StartDate;
    String EndDate;
    Long peopleCnt;
}
