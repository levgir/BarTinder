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