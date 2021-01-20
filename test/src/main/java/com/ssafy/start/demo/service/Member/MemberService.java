package com.ssafy.start.demo.service.Member;


import com.ssafy.start.demo.model.Member.Member;
import com.ssafy.start.demo.model.Team.Team;
import com.ssafy.start.demo.model.users.Users;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MemberService {

    List<Member> findAll();
    Member findById(Long memberId);
    Member save(Member member);
    boolean isMatch(Member member);
}
