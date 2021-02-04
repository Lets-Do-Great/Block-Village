package com.ssafy.edu.model.answer.Response.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class findAllCommentModel {
    private Long answerId;
    private String email;
    private String nickname;
    private String comment;
    private Date updated_at;
}
