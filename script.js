window.onload = function() {

    var timeleft = document.getElementById("timer_input");
    var timer_button = document.getElementById("timer");

    timer_button.onclick = function(){
        
        var sec = 0;
        var starting_time = timeleft.value - 1;

        var time_go = setInterval(function(){
            if(timeleft.value == 1){
                clearInterval(time_go);
            }
            timeleft.value = starting_time - sec;
            sec += 1;
        }, 1000)

    };

    document.getElementById('odp_1').onclick = function(){
        document.getElementById('odp_2').style.opacity = '100';
    }


}