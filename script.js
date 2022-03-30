// function game(){
// var num = alert("This is the game 20. The rules are you have to gets closer will win if you go over 20 you lose.")
// }

function num(){
    var num = Math.floor(Math.random() * 11);
    return num
}


function user(){
    var userCount = 0;
    do {
        userCount = userCount + num()
        if (userCount > 20) {
            break
        }
        var user1 = prompt(`Your total is ${userCount}, would like to get another number?
        If so type the word yes, if not type the word no`)
    } while (user1 == "yes");

    return userCount
        if (user1 == "no"){
        return computerCount
        }
}

function computer(){
     var computerCount = 0;
     do{
         computerCount = computerCount + num()
         if (computerCount > 20){
            break
        }
        }while (computer);

        return computerCount
        
}

function total(){
    if (userCount >= computerCount)
    var user1 = propmpt("Player1 Wins!!!!")

}

