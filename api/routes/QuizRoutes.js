/**
 * Created by Arne on 19-11-2016.
 */

const QuizRepository = require('repositories/QuizRepository');
const QuizService = require('services/QuizService');

module.exports = (App) => {

    App.get('/api/display', (req, res) => res.status(200).send(QuizRepository.getDisplay()));

    App.get('/api/score/list', (req, res) => res.status(200).send(QuizRepository.getAllScores()));

    App.get('/api/ranking/list', (req, res) => res.status(304).send());

    App.get('/api/ranking/final', (req, res) => res.status(304).send());

};