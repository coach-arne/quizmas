/**
 * Created by Arne on 19-11-2016.
 */

const QuizRepository = require('repositories/QuizRepository');
const QuizService = require('services/QuizService');

module.exports = (App) => {

    App.get('/api/round/list', (req, res) => res.status(200).send(QuizRepository.getAllRounds()));

    App.get('/api/team/list', (req, res) => res.status(200).send(QuizRepository.getAllTeams()));

    App.get('/api/team/:team/score/list', (req, res) => res.status(200).send(QuizRepository.getScoresForTeam(req.params.team)));

    App.post('/api/team/:team/round/:round/score', (req, res) => res.status(200).send(QuizService.setScoreForTeamForRound(req.params.team, req.params.round, req.body.value)));

    App.get('/api/score/list', (req, res) => res.status(200).send(QuizRepository.getAllScores()));

    App.get('/api/ranking/list', (req, res) => res.status(304).send());

    App.get('/api/ranking/final', (req, res) => res.status(304).send());

};