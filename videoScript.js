var userDrink = JSON.parse(localStorage.getItem("userDrink"));
console.log(userDrink);

$(document).ready(function() {

    function playerRun() {
        console.log("I ran");
        $("#ytplayer").attr("src", "https://www.youtube.com/embed?listType=search&list=" + userDrink);
    }

    playerRun();

});



