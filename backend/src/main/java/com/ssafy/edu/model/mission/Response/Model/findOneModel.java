package com.ssafy.edu.model.mission.Response.Model;

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
    private Long id;
    private String email;
    private String nickname;
    private String title;
    private Date created_at;
    private Date updated_at;
    private String content;
    private String xmlCode;
    private String imageUrl;
    private int startPositionX;
    private int startPositionY;
    private int endPositionX;
    private int endPositionY;
    private double difficulty;
    private int likeCnt;
    private int peopleCnt;
    private boolean favorite;
    private String todo;
}
