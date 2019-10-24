var userDrink = '';

$(document).ready(function () {

    var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        //console.log(response);

        $("#img").attr("src", response.drinks[0].strDrinkThumb);
        $("#drink-name").text(response.drinks[0].strDrink);
     

        function getIngredients() {
            for (var i = 1; i < 15; i++) {
               
                if (response.drinks[0][("strIngredient" + i)] !== null) {
                    var ingredient = response.drinks[0][("strIngredient" + i)];

               
                    if(response.drinks[0]["strMeasure" + i] !== null) {
                        var measure = response.drinks[0]["strMeasure" + i];
                    }else{
                        var measure = "";
                    }
                    
                    console.log(ingredient);


                    $('#ing-list').append('<li class="ingredient">' + measure + " " + ingredient + '</li>');

                }
            }
        }
        getIngredients();

        //end AJAX call
    });


    //verifying age function
    $("#ageSubmit").click(function () {

        var number = $("#age").val();
     
        if (number === null) {
            $("#output").text("Please enter a valid age");
        }

        if (number < 21) {
            $("#output").text("Sorry, you have to be over 21 to enjoy our site");
        }
        else {
            window.location.href = "main.html";
        }
        //end verify function
    });

    $("#drinkChoice").click(function () {
        userDrink = $("#drink-name").text();
        localStorage.setItem("userDrink", JSON.stringify(userDrink));
        window.location.href = "videoPage.html"
    })


    //ajax call for joke of the day
    var queryURL = "https://official-joke-api.appspot.com/random_joke";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        $("#joke").append(response.setup);
        $("#punch").append(response.punchline);

    });















    //end document ready function
});



