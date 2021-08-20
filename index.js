"use strict"

let places = ['japan','germany','alaska','france'];
let restuarants = ['chilis','red lobster','pluckers','hooters']

function numberFinder (array){
let i = Math.floor(Math.random()*4)
return array[i]
}

let choiceOfPlaces = numberFinder(places);{
    console.log(choiceOfPlaces)
}

let choiceOfResturaunts = numberFinder(restuarants);{
    console.log(choiceOfResturaunts)
}

let choiceOfTransportation = numberFinder(transportation);{
    console.log(choiceOfTransportation)
}

let choiceofEntertainment = numberFinder(entertainment);{
    console.log(choiceofEntertainment)
}

let usersAnswer = prompt("Are you satisfied with your planned out trip? Type Yes to confirm or No to reselect")
    while(usersAnswer === "No"){
        function numberFinder (array){
            let i = Math.floor(Math.random()*4)
            return array[i]
            }

            let choiceOfPlaces = numberFinder(places);{
                console.log(choiceOfPlaces)
            }
            
            let choiceOfResturaunts = numberFinder(restuarants);{
                console.log(choiceOfResturaunts)
            }
            
            let choiceOfTransportation = numberFinder(transportation);{
                console.log(choiceOfTransportation)
            }
            
            let choiceofEntertainment = numberFinder(entertainment);{
                console.log(choiceofEntertainment)
            }
            usersAnswer = prompt("Are you satisfied with your planned out trip? Type Yes to confirm or No to reselect")
            if(usersAnswer === "Yes"){
                console.log("Congratulations! Your trip has been booked, Enjoy!")
                
            }

            }
            
         
            
