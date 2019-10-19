<<<<<<< HEAD
https://www.thecocktaildb.com/api/json/v1/1/random.php

var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);

    $("#img").attr("src", response.drinks[0].strDrinkThumb);
    $("#drink-name").text(response.drinks[0].strDrink);
    console.log(response.drinks[0][("strIngredient1")]);
    console.log(response.drinks[0].length);
   
    function getIngredients () {
    for (var i = 1; i < 15; i++) {
        console.log(i);
        if (response.drinks[0][("strIngredient" + i)] !== null) {
            var ingredient = response.drinks[0][("strIngredient" + i)];
            var measure = response.drinks[0]["strMeasure" + i];
            console.log(ingredient);
       
            $('#ing-list').append('<li class="ingredient">'+ measure + ingredient +  '</li>');

        }


    }

}
getIngredients();



});
=======
$(document).ready(function () {

    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        $("#img").attr("src", response.drinks[0].strDrinkThumb);
        $("#drink-name").text(response.drinks[0].strDrink);
        console.log(response.drinks[0][("strIngredient1")]);

        function getIngredients() {
            for (var i = 1; i < 15; i++) {
                console.log(i);
                if (response.drinks[0][("strIngredient" + i)] !== null) {
                    var ingredient = response.drinks[0][("strIngredient" + i)];
                    var measure = response.drinks[0]["strMeasure" + i];
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
            console.log(number);
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

    //end document ready function
});


>>>>>>> master
