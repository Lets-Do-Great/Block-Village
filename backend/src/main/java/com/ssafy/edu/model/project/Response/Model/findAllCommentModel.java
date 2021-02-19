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
public class findAllCommentModel {
    private Long id;
    private String email;
    private String nickname;
    private String comment;
    private Date updated_at;
}
