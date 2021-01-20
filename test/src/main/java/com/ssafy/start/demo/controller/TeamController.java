package com.ssafy.start.demo.controller;

import com.ssafy.start.demo.model.Member.Member;
import com.ssafy.start.demo.model.Team.Team;
import com.ssafy.start.demo.service.Member.MemberService;
import com.ssafy.start.demo.service.Team.TeamService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class TeamController {
    @Autowired
    private TeamService teamService;

    @GetMapping("team")
    @ApiOperation(value = "팀 전체 검색")
    public List<Team> getAllTeam() {
        List<Team> teamList = teamService.findAll();
        return teamList;
    }

    @PostMapping("team")
    @ApiOperation(value = "팀 등록")
    public Team signUpTeam(@RequestBody Team joinTeam) {
        return teamService.save(joinTeam);
    }

    @GetMapping("team/{teamId}")
    @ApiOperation(value = "팀 한개만 검색")
    public Team getTeam(@PathVariable("teamId") Long teamId) {
        return teamService.findById(teamId);
    }
}

