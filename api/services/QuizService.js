/**
 * Created by Arne on 19-11-2016.
 */

const QuizRepository = require('repositories/QuizRepository');

const setScoreForTeamForRound = (team, round, value) => {
    QuizRepository.setScoreForTeamForRound(team, round, value);
    QuizRepository.save();

    return QuizRepository.getScoresForTeam(team, round);
};

module.exports = { setScoreForTeamForRound };