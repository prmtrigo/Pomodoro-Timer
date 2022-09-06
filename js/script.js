let workTittle = document.getElementById('work');
let breakTittle = document.getElementById('break');

let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;
    
    workTittle.classList.add('active');
}

function start() {

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";
    

    seconds = 59;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;
    
        seconds = seconds - 1;

        if(seconds === 0){
            workMinutes = workMinutes -1;
            
            if(workMinutes === -1){

                if(breakCount%2 === 0){

                    //Começar o descanso
                    workMinutes = breakMinutes;
                    breakCount++;

                    //trocar para o pomodoro de trabalho
                    workTittle.classList.remove('active');
                    breakTime.classList.add('active');
                }
                else
                {
                    
                    //continuar o funcionamento do código
                    workMinutes = workTime;
                    breakCount++

                    //vai trocar para o Pomodoro de trabalho
                    breakTittle.classList.remove('active');
                    workTittle.classList.add('active');
                }
            }

            seconds = 59;
        }
    }

    setInterval(timerFunction, 1000);
    //1000 == 1s
}