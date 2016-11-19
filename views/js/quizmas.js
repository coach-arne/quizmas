/**
 * Created by Arne on 19-11-2016.
 */
(function (parent) {

    parent.Quizmas = function () {

        function toJson (response) { return response.json(); }

        function getTeams () { return fetch('/api/team/list').then(toJson); }
        function createTeam (team) { return fetch('/api/team?name='+encodeURIComponent(team), { method: 'put' }).then(toJson); }
        function deleteTeam (id) { return fetch('/api/team/'+id, { method: 'delete' }).then(toJson); }

        function getRounds () { return fetch('/api/round/list').then(toJson); }
        function createRound (round) { return fetch('/api/round?name='+encodeURIComponent(round), { method: 'put'}).then(toJson); }
        function deleteRound (id) { return fetch('/api/round/'+id, { method: 'delete' }).then(toJson); }

        function getRankings () { return fetch('/api/rankings/list').then(toJson);  }
        function getRankingsForFinal () { return fetch('/api/rankings/final').then(toJson); }
        function getScores () { return fetch('/api/admin/scores').then(toJson); }
        function updateTeamScore (team, round, value) {
            return fetch('/api/admin/score/'+team+'/round/'+round+'/score', {
                method: 'post',
                body: JSON.stringify({
                    value: value
                })
            }).then(toJson);
        }

        // I'll fix everything later... sighs
        function getEverything () {
            return fetch('/api/quiz/everything').then(toJson);
        }

        return {
            getTeams: getTeams,
            createTeam: createTeam,
            deleteTeam: deleteTeam,
            getRounds: getRounds,
            createRound: createRound,
            deleteRound: deleteRound,
            getRankings: getRankings,
            getRankingsForFinal: getRankingsForFinal,
            getScores: getScores,
            updateTeamScore: updateTeamScore,
            getEverything: getEverything
        };
    }();

})(window);