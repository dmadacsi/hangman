 
 
 
 

        //define var to contain words for the game

        var computerChoices = ["darth", "yoda", "lightsaber", "force", "falcon"];
    

        //use RPS ex for computer to randomly select a word
        var randomWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        var wrongGuess = [];
        var solution = [];
        var userGuess
        
       


        alert("I have selected a word from Star Wars ");

        for (var i = 0; i < randomWord.length; i++) {
            solution.push("-");

        }
        console.log(solution);

        // for (j = 0; j< randomWord.length; j++ ){
        //     wrongGuess.push(userGuess);
        // }
       

       
        //below replace word with dashes. comment this out to see logging in console properly letter by letter
        document.getElementById("info").innerHTML = randomWord.replace(/./g, '-');

        document.onkeyup = function (event) {
            var userGuess = event.key;
            var matchingGuess = randomWord.match(userGuess);
            var wrongGuess = userGuess;
            //console.log(wrongGuess[0]);
            
            // if (wrongGuess >= 10) {
            //       alert ("SORRY YOU LOOSE")
            //   }

            if (matchingGuess !== null) {
                console.log(matchingGuess.index);

                solution[matchingGuess.index] = matchingGuess[0];

                console.log(solution)
            
                document.getElementById("info").innerHTML = solution.join("");
                // if (solution.indexOf(userGuess === matchingGuess)) {
                // alert( "greatjob")

                // }    
               
        }
            else{
                    //alert( "sorry !!!")
                  
                   //I've spent hours and hours on the line below tring to get this to go into a variable and
                   //i cannot get it to work - extrememly frustrating. only puts one up at a time. i guess i don't
                   //understand how to store a variable. probably 15 of the 23 hours was on this. I tried 20-30 things.
                   //I checked websites, made different versiions, ran this code just in my sandbox.
                    document.getElementById("wrong").innerHTML= wrongGuess; 
                    
                }
        
              

             }   
            
              
            
        
        
        
    
                                 
                              






// function newFunction(userGuess) {
//     document.write(userGuess);
// }
//use onkeyup to get user input - see RPS game


//use RPS ex for computer to randomly select a word


//take rps input and use a conditional statement to see if letter exists in words


//for (var userGuess = 0; userGuess < randomWord.length; userGuess++){
//var c = userGuess.charAt();
//console.log(userGuess[c]);
//}


//if letter true display 
//else "sorry" and deduct point or display graphic?
//console.log(randomWord);




