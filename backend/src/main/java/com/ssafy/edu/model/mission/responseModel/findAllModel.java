package com.ssafy.edu.model.mission.responseModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findAllModel {
    private Long missionId;
    private String email;
    private String title;
    private double difficulty;
    private int likeCnt;
    private int peopleCnt;
}
