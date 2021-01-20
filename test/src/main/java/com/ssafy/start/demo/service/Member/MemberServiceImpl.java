package com.ssafy.start.demo.service.Member;


import com.ssafy.start.demo.model.Member.Member;
import com.ssafy.start.demo.model.Team.Team;
import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.repository.MemberRepository;
import com.ssafy.start.demo.repository.TeamRepository;
import com.ssafy.start.demo.repository.users.UserRepository;
import com.ssafy.start.demo.service.EncryptHelper.EncryptHelper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private EncryptHelper encryptHelper;

    @Override
    public List<Member> findAll() {
        List<Member> memberList = new ArrayList<>();
        memberRepository.findAll().forEach(e -> {
            memberList.add(e);
        });
        return memberList;
    }

    @Override
    public Member findById(Long memberId) {
        Optional<Member> memberOpt = memberRepository.findById(memberId);
        Member member = new Member();
        if(memberOpt.isPresent()){
            member = memberOpt.get();
        }
        return member;
    }

    @Override
    public Member save(Member member) {
        String hashpassword = encryptHelper.encrypt(member.getPassword());
        member.setPassword(hashpassword);
        return memberRepository.save(member);
    }

    @Override
    public boolean isMatch(Member member) {
        System.out.println("member.getId() = " + member.getId());
        Optional<Member> memberOpt = memberRepository.findById(member.getId());
        Member hashed = new Member();
        if(memberOpt.isPresent()){
            hashed = memberOpt.get();
        }
        if(encryptHelper.isMatch(member.getPassword(),hashed.getPassword())){
            return true;
        }
        return false;
    }
}
