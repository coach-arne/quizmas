/**
 * Created by Arne on 19-11-2016.
 */
(function (parent) {

    parent.Quizmas = function () {

        function toJson (response) { return response.json(); }

        function getRankings () { return fetch('/api/rankings/list').then(toJson);  }
        function getRankingsForFinal () { return fetch('/api/rankings/final').then(toJson); }
        function getTeamScores () { return fetch('/api/admin/scores').then(toJson); }
        function updateTeamScore (team, round, value) {
            return fetch('/api/admin/score/'+team+'/round/'+round+'/score', {
                method: 'post',
                body: JSON.stringify({
                    value: value
                })
            }).then(toJson);
        }

        return {
            getRankings: getRankings,
            getRankingsForFinal: getRankingsForFinal,
            getTeamScores: getTeamScores,
            updateTeamScore: updateTeamScore
        };
    }();

})(window);