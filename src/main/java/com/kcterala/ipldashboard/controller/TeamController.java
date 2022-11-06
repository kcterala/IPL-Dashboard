package com.kcterala.ipldashboard.controller;

import com.kcterala.ipldashboard.model.Match;
import com.kcterala.ipldashboard.model.Team;
import com.kcterala.ipldashboard.repository.MatchRepository;
import com.kcterala.ipldashboard.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin
public class TeamController {
    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private MatchRepository matchRepository;
    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName){
        Team team = teamRepository.findByTeamName(teamName);

        team.setMatches(matchRepository.findLatestMatchesByTeam(teamName,4));

        return  team;
    }
    @GetMapping("/team")
    public Iterable<Team> getAllTeam(){
        return teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year){
        LocalDate startDate = LocalDate.of(year,1,1);
        LocalDate lastDate = LocalDate.of(year+1, 1, 1);
        return matchRepository.getMatchesByTeamBetweenDates(teamName,startDate,lastDate);
    }

}
