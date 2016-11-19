/**
 * Created by Arne on 19-11-2016.
 */

const fs = require('fs');

const Data = require('data/data.json');
const Lenses = require('helpers/Lenses');

Lenses.use(Data);

// Lenses
const scoresForTeamForRound = (team, round) => Lenses.create(['scores', team, round]);
const scoresForTeam = (team) => Lenses.create(['scores', team]);
const teams = () => Lenses.create(['teams']);
const rounds = () => Lenses.create(['rounds']);
const scores = () => Lenses.create(['scores']);

// Getters
const getAllTeams = () => teams().view();
const getAllRounds = () => rounds().view();
const getAllScores = () => scores().view();
const getScoresForTeam = (team) => scoresForTeam(team).view();
const getScoreForTeamForRound = (team, round) => scoresForTeamForRound(team, round).view();

// Setters
const setScoreForTeamForRound = (team, round, value) => scoresForTeamForRound(team, round).set(value);

// Administrative
const save = () => fs.writeFileSync(dir + '/api/data/data.json', JSON.stringify(Lenses.config()));

// Exports
module.exports = { getAllTeams, getAllRounds, getAllScores, getScoresForTeam, getScoreForTeamForRound, setScoreForTeamForRound, save };