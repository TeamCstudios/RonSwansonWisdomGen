function changeMessage(){
    var x = Randomizer.nextInt(0,1);
    for(var i=0; i<5; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
}
