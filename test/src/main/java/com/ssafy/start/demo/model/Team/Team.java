package com.ssafy.start.demo.model.Team;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.start.demo.model.Member.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "team")
    List<Member> memberList = new ArrayList<Member>();
}
