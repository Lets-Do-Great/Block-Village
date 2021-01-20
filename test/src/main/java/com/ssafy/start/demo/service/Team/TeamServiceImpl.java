package com.ssafy.start.demo.service.Team;

import com.ssafy.start.demo.model.Team.Team;
import com.ssafy.start.demo.model.users.Users;
import com.ssafy.start.demo.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TeamServiceImpl implements TeamService{

    @Autowired
    private TeamRepository teamRepository;

    @Override
    public List<Team> findAll() {
        List<Team> teamList = new ArrayList<>();
        teamRepository.findAll().forEach(e -> {
            teamList.add(e);
        });
        return teamList;
    }

    @Override
    public Team findById(Long teamId) {
        Optional<Team> teamOpt = teamRepository.findById(teamId);
        Team team = new Team();
        if(teamOpt.isPresent()){
            team = teamOpt.get();
        }
        return team;
    }

    @Override
    public Team save(Team team) {
        return teamRepository.save(team);
    }
}
