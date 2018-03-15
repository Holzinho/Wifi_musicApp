const fs = require('fs');

const quiz = {
    shuffle : function(cat) {
        var allSongs = [], randomSongs = [];
        const items = fs.readdirSync('./server/Musik/HipHop');
        items.forEach((item) => {
            allSongs.push(item);
        });
        for(let i = 0; i < 10; i++){
            var random = Math.floor(Math.random()* allSongs.length);
            randomSongs.push({ correctAnswer : allSongs.splice(random,1)[0] });
        }
        randomSongs.forEach((song)=>{
            var possibleWrongAnswers = items.filter((item)=>{
                return item != song.correctAnswer;
            });
            for (let i = 0; i < 3; i++) {
                var random = Math.floor(Math.random() * possibleWrongAnswers.length);
                if (!song.incorrectAnswers) {
                    song.incorrectAnswers = [];
                }
                song.incorrectAnswers.push(possibleWrongAnswers.splice(random, 1)[0]);
            }
        });
        return randomSongs;
    }
}

module.exports = quiz;