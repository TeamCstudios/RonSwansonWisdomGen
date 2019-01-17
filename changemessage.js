function changeMessage(){
    var phrasetype = Math.floor(Math.random() * 3);
    if (phrasetype == 0) {
     for(var i=0; i<5; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
     }
    }
    else if(phrasetype == 1){
        for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines3[i][(Math.floor(Math.random()*lines3[i].length))]
            document.getElementById("4line").innerHTML=lines3[2][(Math.floor(Math.random()*lines3[2].length))];
        }
    }
    else{
        for(var i=0; i<7; i++){
            document.getElementById(i+"line").innerHTML=lines4[i][(Math.floor(Math.random()*lines4[i].length))]
            document.getElementById("4line").innerHTML=lines3[2][(Math.floor(Math.random()*lines3[3].length))];

        }
    }
    document.getElementById("startBttn").textContent = "Again?";
}
