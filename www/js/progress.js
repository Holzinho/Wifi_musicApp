
var width = 10


var starteProgress = function () {

    if (width > 0) {
        width--;
        console.log(width);
        $('.progress-bar').css({ 'width': width + 'sek' }).html(width + 'sek');

    } if (width == 0) {
        alert('Fertig');
        clearInterval(stopProgress);
        console.log('Fertig...');
    };

};


var stopProgress = setInterval(function () { starteProgress() }, 1000);
