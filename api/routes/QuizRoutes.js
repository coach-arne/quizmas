/**
 * Created by Arne on 19-11-2016.
 */
module.exports = (App) => {

    App.get('/api/team/list', (req, res) => res.status(304).send());

    App.post('/api/team/score', (req, res) => res.status(304).send());

    App.get('/api/ranking/list', (req, res) => res.status(304).send());

    App.get('/api/ranking/final', (req, res) => res.status(304).send());

};