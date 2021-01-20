package com.ssafy.start.demo.model.Member;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.start.demo.model.Team.Team;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String password;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="team_id")
    private Team team;
}
