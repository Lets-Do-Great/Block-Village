package com.ssafy.edu.model.mission.Response.responseModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findOneModel {
    private Long missionId;
    private String email;
    private String nickname;
    private String title;
    private Date created_at;
    private Date updated_at;
    private String content;
    private String code;
    private double difficulty;
    private int likeCnt;
    private int peopleCnt;
    private boolean favorite;
    private String todo;
}
