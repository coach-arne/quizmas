/**
 * Created by Arne on 19-11-2016.
 */

const QuizRepository = require('repositories/QuizRepository');
const QuizService = require('services/QuizService');

module.exports = (App) => {

    App.put('/api/round', (req, res) => res.status(200).send(QuizService.createRound(req.body)));
    App.get('/api/round/list', (req, res) => res.status(200).send(QuizRepository.getAllRounds()));
};