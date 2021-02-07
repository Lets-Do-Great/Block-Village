package com.ssafy.edu.model.challenge;


import io.swagger.annotations.ApiModelProperty;
import lombok.*;


@Getter
@Setter
@Builder
public class ChallengeListForm {
    Long challengeId;
    String title;
    String image;
    String startdate;
    String enddate;
    Long peoplecnt;
}
