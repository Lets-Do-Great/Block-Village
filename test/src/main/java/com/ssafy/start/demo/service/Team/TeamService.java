package com.ssafy.start.demo.service.Team;


import com.ssafy.start.demo.model.Team.Team;
import com.ssafy.start.demo.model.users.Users;

import java.util.List;

public interface TeamService {
    List<Team> findAll();
    Team findById(Long teamId);
    Team save(Team team);
}
