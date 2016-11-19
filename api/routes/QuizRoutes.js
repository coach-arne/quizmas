/**
 * Created by Arne on 19-11-2016.
 */

const QuizRepository = require('repositories/QuizRepository');

module.exports = (App) => {

    App.get('/api/team/list', (req, res) => res.status(200).send(QuizRepository.getAllTeams()));

    App.post('/api/team/:team/scores', (req, res) => res.status(200).send(QuizRepository.getScoresForTeam(req.params.team)));

    App.get('/api/ranking/list', (req, res) => res.status(304).send());

    App.get('/api/ranking/final', (req, res) => res.status(304).send());

};