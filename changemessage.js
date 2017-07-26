function changeMessage(){
    var phrasetype = Randomizer.nextInt(0,1);
    if (phrasetype == 0) {
    for(var i=0; i<5; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
    }
    else {
        for(var i=0; i<5; i++){
            document.getElementById(i+"line").innerHTML=lines3[i][(Math.floor(Math.random()*lines3[i].length))];
    }
    }
}
