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

const createTeam = (team) => {

    team.id = UUID.v4();

    QuizRepository.createTeam(team);
    QuizRepository.save();

    return team;
};

const createRound = (round) => {

    round.id = UUID.v4();

    QuizRepository.createRound(round);
    QuizRepository.save();

    return round;
};

module.exports = { setScoreForTeamForRound, createTeam, createRound };