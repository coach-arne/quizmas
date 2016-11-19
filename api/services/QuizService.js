/**
 * Created by Arne on 19-11-2016.
 */

const UUID = require('node-uuid');
const QuizRepository = require('repositories/QuizRepository');

const setScoreForTeamForRound = (team, round, value) => {
    QuizRepository.setScoreForTeamForRound(team, round, value);
    QuizRepository.save();

    return QuizRepository.getScoresForTeam(team, round);
};

const deleteTeam = (teamId) => {

    QuizRepository.deleteTeam(teamId);
    QuizRepository.save();

    return QuizRepository.getAllTeams();

};

const createTeam = (name) => {

    const team = {
        id: UUID.v4(),
        name: name
    };

    QuizRepository.createTeam(team);

    QuizRepository.save();

    return team;
};

const deleteRound = (roundId) => {

    QuizRepository.deleteRound(roundId);
    QuizRepository.save();

    return QuizRepository.getAllRounds();

};

const createRound = (name) => {

    const round = {
        id: UUID.v4(),
        name: name
    };

    QuizRepository.createRound(round);
    QuizRepository.save();

    return round;
};

module.exports = { setScoreForTeamForRound, createTeam, createRound, deleteTeam, deleteRound };