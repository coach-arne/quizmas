/**
 * Created by Arne on 19-11-2016.
 */

const Multer = require('multer');
const Upload = Multer({ dest: 'uploads/' });

const CSV = require("csvtojson");

const QuizRepository = require('repositories/QuizRepository');
const QuizService = require('services/QuizService');

module.exports = (App) => {

    App.put('/api/team', (req, res) => res.status(200).send(QuizService.createTeam(req.query.name, req.query.table)));
    App.get('/api/team/list', (req, res) => res.status(200).send(QuizRepository.getAllTeams()));
    App.delete('/api/team/:team', (req, res) => res.status(200).send(QuizService.deleteTeam(req.params.team)));
    App.get('/api/team/:team/score/list', (req, res) => res.status(200).send(QuizRepository.getScoresForTeam(req.params.team)));
    App.post('/api/team/:team/tiebreaker', (req, res)=> res.status(200).send(QuizRepository.setTiebreaker(req.params.team, req.body.value)));

    App.post('/api/teams/import', Upload.single('csv'), async (req, res) => {

        try {
            const teams = await CSV({delimiter: ';'}).fromFile(req.file.path);

            teams
                .filter(({Nr}) => !Number.isNaN(parseInt(Nr)))
                .forEach(({Nr, Teamnaam}) => {
                    QuizService.createTeam(Teamnaam, Nr);
                });

            res.status(200).send({message: "import done"});
        } catch(error) {
            res.status(500).send({message: "Something wrong, see logs"});
        }
    });
};