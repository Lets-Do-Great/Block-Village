package com.ssafy.edu.model.answer.Response.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findAllModelName {
    private Long id;
    private Long missionId;
    private String email;
    private String title;
    private String nickname;
    private int likeCnt;
    private int readCnt;
    private int commentCnt;
}
