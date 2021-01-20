package com.ssafy.start.demo.controller;

import com.ssafy.start.demo.model.Member.Member;
import com.ssafy.start.demo.service.Member.MemberService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class MemberController {
    @Autowired
    private MemberService memberService;

    @GetMapping("member")
    @ApiOperation(value = "멤버 전체 사용자 검색")
    public List<Member> getAllMember() {
        List<Member> memberList = memberService.findAll();
        return memberList;
    }

    @PostMapping("member")
    @ApiOperation(value = "멤버 등록")
    public Member signUpMember(@RequestBody Member joinMember) {
        return memberService.save(joinMember);
    }

    @GetMapping("member/{memberId}")
    @ApiOperation(value = "멤버 한명만 검색")
    public Member getMember(@PathVariable("memberId") Long memberId) {
        return memberService.findById(memberId);
    }
    @PostMapping("member/pwcheck")
    @ApiOperation(value = "멤버 비밀번호 체크")
    public String Match(@RequestBody Member member){
        if(memberService.isMatch(member)){
            return "동일한 비밀번호";
        }
        return "다른 비밀번호";
    }
}
