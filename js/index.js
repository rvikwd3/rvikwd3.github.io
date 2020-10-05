var draft_timer = 30;

var x = setInterval(function() {

    draft_timer--;
    
    var minutes = Math.floor(draft_timer / 60);
    var seconds = Math.floor(draft_timer % 60);

    document.getElementById("timer-text").innerHTML = "0" + minutes + ":" + (seconds<10?"0":"") + seconds;

    if (draft_timer == 0){
        clearInterval(x);
        document.getElementById("timer-text").style.color = "red";
    }
}, 1000);