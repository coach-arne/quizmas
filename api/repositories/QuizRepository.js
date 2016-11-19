/**
 * Created by Arne on 19-11-2016.
 */

const fs = require('fs');

const Data = require('data/data.json');
const Lenses = require('helpers/Lenses');

Lenses.use(Data);

const scoreForTeamForRound = (team, round) => Lenses.create(['scores', team, round]);
const scoreForTeam = (team) => Lenses.create(['scores', team]);
const teams = () => Lenses.create(['teams']);
const rounds = () => Lenses.create(['teams']);
const scores = () => Lenses.create(['scores']);

const getAllTeams = () => teams().view();
const getAllRounds = () => rounds().view();
const getAllScores = () => scores().view();
const getScoreForTeam = (team) => scoreForTeam(team).view();
const getScoreForTeamForRound = (team, round) => scoreForTeamForRound(team, round).view();

module.exports = { getAllTeams, getAllRounds, getAllScores, getScoreForTeam, getScoreForTeamForRound };