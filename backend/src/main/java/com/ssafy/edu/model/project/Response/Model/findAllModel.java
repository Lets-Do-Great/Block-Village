package com.ssafy.edu.model.project.Response.Model;

import com.ssafy.edu.model.project.ProjectComment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findAllModel {
    private Long id;
    private String email;
    private String title;
    private String imageUrl;
    private int blockCnt;
    private int likeCnt;
    private int readCnt;
    private int commentCnt;
}
