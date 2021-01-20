package com.ssafy.start.demo.repository;

import com.ssafy.start.demo.model.Member.Member;
import com.ssafy.start.demo.model.Team.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member,Long> {
}
