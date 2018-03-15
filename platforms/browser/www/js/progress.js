var width = 100;



var starteProgress = function(){
    if( width > 0){
            width--;
            console.log(width);
            $('.progress-bar').css({'width': width + '%'}).html(width + '%');

        } if(width == 0){
            alert('Fertig');
            clearInterval(stopProgress);
            console.log('Fertig...');
        }; 
    
};


var stopProgress = setInterval(function(){ starteProgress() }, 100);
