let team1Score = document.getElementById("t-score1")
let team2Score = document.getElementById("t-score2")
let team1fouls = document.getElementById("foul1")
let team2fouls = document.getElementById("foul2")

let lastscoreteam1 = 0
let lastscoreteam2 = 0
let foulsteam1=0
let foulsteam2=0



function countdown( elementName, minutes, seconds )
{
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}




function t1add1() {
    lastscoreteam1+=1
    team1Score.innerText = lastscoreteam1
    setWhoiswinning()
}
function t1sub1() {
    if(lastscoreteam1-1!=-1){
    lastscoreteam1-=1
    team1Score.innerText = lastscoreteam1
    setWhoiswinning()
    }
    else{
        alert("Home Team can't go below 0!")
    }
}

function t1add2() {
    lastscoreteam1+=2
    team1Score.innerText = lastscoreteam1  
    setWhoiswinning() 
}

function t1add3() {
    lastscoreteam1+=3
    team1Score.innerText = lastscoreteam1  
    setWhoiswinning() 
}
function t2add1() {
    lastscoreteam2+=1
    team2Score.innerText = lastscoreteam2
    setWhoiswinning()
}
function t2sub1() {
    if(lastscoreteam2-1!=-1){
    lastscoreteam2-=1
    team2Score.innerText = lastscoreteam2
    setWhoiswinning()
    }
    else{
        alert("Guest Team can't go below 0!")
    }
}

function t2add2() {
    lastscoreteam2+=2
    team2Score.innerText = lastscoreteam2   
    setWhoiswinning()
}

function t2add3() {
    lastscoreteam2+=3
    team2Score.innerText = lastscoreteam2  
    setWhoiswinning() 
}

function setWhoiswinning() {
    if(lastscoreteam1>lastscoreteam2){
        team1Score.style.border= "thick solid #7FB069"
        team2Score.style.border= "thick solid white"
    }
    else{
        team1Score.style.border= "thick solid white"
        team2Score.style.border= "thick solid #7FB069"
    }
    if(lastscoreteam1==lastscoreteam2){
        team2Score.style.border="thick solid white"
        team2Score.style.border="thick solid white"
        
    }
}

function foul1(){
    if(foulsteam1<6){
    foulsteam1+=1
    const justfornow =team1fouls.innerText.slice(0, -1)
    team1fouls.innerText = "🔴" + justfornow
    } else{
        alert("Home Team reached Maxumun Fouls!")
    }   
    
}
function foul2(){
    if(foulsteam2<6){
    foulsteam2+=1
    const justfornow =team2fouls.innerText.slice(0, -1)
    team2fouls.innerText = "🔴" + justfornow
    } else{
        alert("Guest Team reached Maxumun Fouls!")
    }   
}

function gameStart(){
    countdown( "ten-countdown", 10, 0 );
}