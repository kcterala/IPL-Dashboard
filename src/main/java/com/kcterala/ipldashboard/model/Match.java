package com.kcterala.ipldashboard.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;
@Data
@Entity
public class Match {
    @Id
    private long id;
    private String city;
    private LocalDate date;
    private String playerOfMatch;
    private String venue;
    private String team1;
    private String team2;
    private String tossWinner;
    private String tossDecision;
    private String matchWinner;
    private String result;
    private String resultMargin;
    private String umpire1;
    private String umpire2;
}

/*
    :id,:city,:date,:playerOfMatch,:venue,:team1,:team2,:tossWinner,:tossDecision,:matchWinner,:result,:resultMargin,:umpire1,:umpire2
 */