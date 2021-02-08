package com.ssafy.edu.model.mission.Response.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findAllModel {
    private Long id;
    private String email;
    private String title;
    private String imageUrl;
    private double difficulty;
    private int likeCnt;
    private int peopleCnt;
}
