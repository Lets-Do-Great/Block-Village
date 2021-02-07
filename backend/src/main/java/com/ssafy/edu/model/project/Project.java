package com.ssafy.edu.model.project;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.ssafy.edu.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private Long id;
    private String title;
    private String content;
    @Column(columnDefinition = "TEXT")
    private String xmlCode;
    @Column(columnDefinition = "TEXT")
    private String javascriptCode;
    private int favorite;
    private int view;
    private int blockCnt;
    private String projectImg;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date createdAt;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date updatedAt;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy = "project" ,cascade = {CascadeType.ALL})
    private List<ProjectFavorite> projectFavoriteList = new ArrayList<>();

    @JsonManagedReference
    @OneToMany(mappedBy = "project",cascade = {CascadeType.ALL})
    private List<ProjectComment> projectCommentList = new ArrayList<>();
}
