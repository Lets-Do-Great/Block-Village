package com.ssafy.edu.model.answer.Response.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findOneModel {
    private Long id;
    private String email;
    private String title;
    private Long missionId;
    private String xmlCode;
    private String javascriptCode;
    private String content;
    private int startPositionX;
    private int startPositionY;
    private boolean favorite;
    private int likeCnt;
    private int readCnt;
    private int commentCnt;
}
