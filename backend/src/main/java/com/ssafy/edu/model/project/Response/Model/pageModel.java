package com.ssafy.edu.model.project.Response.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * page 관련 응답 모델
 *
 * pageisFirst : 현재 페이지가 첫 페이지 인지 여부
 * pageSize : 현재 페이지 데이터 수
 * pageNumber : 현재 페이지
 * pageTotalPages : 전체 페이지 수
 * pageTotalElements : 전체 데이터 수
 * 페이지는 0부터 시작합니다. 주의해주세요!
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class pageModel {
    private boolean pageisFirst;
    private int pageSize;
    private int pageNumber;
    private int pageTotalPages;
    private int pageTotalElements;
}
