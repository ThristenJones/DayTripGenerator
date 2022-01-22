"use strict"

let places = ['japan','germany','hawaii','france'];
let restuarants = ['chilis','red lobster','pluckers','texas roadhouse'];
let transportation = ['corvette', 'mustang','lamborghini','ferrai'];
let entertainment = ['museum','concert','comedy show','movies']

function numberFinder (array){
let i = Math.floor(Math.random()*4)
return array[i]
}

let choiceOfPlaces = numberFinder(places);{
}

let choiceOfResturaunts = numberFinder(restuarants);{

}

let choiceOfTransportation = numberFinder(transportation);{
}

let choiceofEntertainment = numberFinder(entertainment);{
}

function Alert() {
    alert(`Hello there, thanks for choosing to have the best time of your life! We've set up a whole trip for you! You will be flying out to ${choiceOfPlaces.toUpperCase()} first class and enjoying a free meal at a fancy resturaunt called ${choiceOfResturaunts.toUpperCase()}. For your transportation, you will be arriving in a ${choiceOfTransportation.toUpperCase()} and your entertainment will be a ${choiceofEntertainment.toUpperCase()} night `)
}
 
Alert()
let usersAnswer = prompt("Please let us know if your satisfied with your trip we planned for you! Type Yes to confirm your trip or No to randomly reselect a whole new one!")
    if(usersAnswer.toUpperCase() === "YES") {
        document.querySelector("body").innerHTML = `Congratulations! Your trip has been booked, Enjoy your stay in ${choiceOfPlaces.toUpperCase()} while eating at ${choiceOfResturaunts.toUpperCase()}. A ${choiceofEntertainment.toUpperCase()} night always seems pretty fun and let us know how fast the ${choiceOfTransportation.toUpperCase()} goes. All Web Developers check the console log for your confirmation number.!`
                console.log("Congratulations. Your confirmation number is: 1122334")

    }
    while(usersAnswer.toUpperCase() === "NO"){
        function numberFinder (array){
            let i = Math.floor(Math.random()*4)
            return array[i]
            }

            let choiceOfPlaces = numberFinder(places);{
            }
            
            let choiceOfResturaunts = numberFinder(restuarants);{
            }
            
            let choiceOfTransportation = numberFinder(transportation);{
            }
            
            let choiceofEntertainment = numberFinder(entertainment);{
            }
            function reAlert() {
                alert(`Didn't like that one, No worries! We've set up a whole new trip for you. So you will flying out to ${choiceOfPlaces.toUpperCase()} and enjoying a free meal at ${choiceOfResturaunts.toUpperCase()}. For transportation you will be arriving in a ${choiceOfTransportation.toUpperCase()} and your entertainment will be a ${choiceofEntertainment.toUpperCase()}`)
            }
            reAlert()
            usersAnswer = prompt("Are you satisfied with your planned out trip? Type Yes to confirm or No to reselect")
            if(usersAnswer.toUpperCase() === "YES"){
                document.querySelector("body").innerHTML = `Congratulations! Your trip has been booked, Enjoy your stay in ${choiceOfPlaces.toUpperCase()} while eating at ${choiceOfResturaunts.toUpperCase()}. A ${choiceofEntertainment.toUpperCase()} night always seems pretty fun and let us know how fast the ${choiceOfTransportation.toUpperCase()} goes. All Web Developers check the console log for your confirmation number.!`
                console.log("Congratulations. Your confirmation number is: 1122334")
                
            }

            }
            
         
            
