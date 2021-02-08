package com.ssafy.edu.model.project.Response.Model;

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
    private String imageUrl;
    private String xmlCode;
    private String javascriptCode;
    private int blockCnt;
    private boolean favorite;
    private int likeCnt;
    private int readCnt;
    private int commentCnt;
}
