package com.ssafy.edu.model.answer.Response.Model;

import com.ssafy.edu.model.answer.AnswerComment;
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
    private Long missionId;
    private String email;
    private String title;
    private int likeCnt;
    private int readCnt;
    private int commentCnt;
}
