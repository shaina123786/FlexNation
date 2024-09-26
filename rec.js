function calculateNutrition() {
    var recipeName = document.getElementById("recipeName").value;
    var servings = parseInt(document.getElementById("servings").value);

    if (recipeName.trim() === "" || isNaN(servings) || servings <= 0) {
        alert("Please enter a valid recipe name and number of servings.");
        return;
    }

    var ingredients = document.getElementsByClassName("ingredient");
    var totalCalories = 0;
    var totalProtein = 0;
    var totalCarbs = 0;
    var totalFat = 0;

    for (var i = 0; i < ingredients.length; i++) {
        var ingredient = ingredients[i];
        var ingredientName = ingredient.querySelector(".ingredient-name").value;
        var ingredientCalories = parseFloat(ingredient.querySelector(".ingredient-calories").value);
        var ingredientProtein = parseFloat(ingredient.querySelector(".ingredient-protein").value);
        var ingredientCarbs = parseFloat(ingredient.querySelector(".ingredient-carbs").value);
        var ingredientFat = parseFloat(ingredient.querySelector(".ingredient-fat").value);

        if (isNaN(ingredientCalories) || isNaN(ingredientProtein) || isNaN(ingredientCarbs) || isNaN(ingredientFat)) {
            alert("Please enter valid nutrition values for all ingredients.");
            return;
        }

        totalCalories += ingredientCalories;
        totalProtein += ingredientProtein;
        totalCarbs += ingredientCarbs;
        totalFat += ingredientFat;
    }

    var nutritionResult = "Nutrition information for " + recipeName + " (per serving):\n";
    nutritionResult += "Total Calories: " + (totalCalories / servings).toFixed(2) + " kcal\n";
    nutritionResult += "Total Protein: " + (totalProtein / servings).toFixed(2) + " g\n";
    nutritionResult += "Total Carbohydrates: " + (totalCarbs / servings).toFixed(2) + " g\n";
    nutritionResult += "Total Fat: " + (totalFat / servings).toFixed(2) + " g";

    document.getElementById("result").innerText = nutritionResult;
}

function addIngredient() {
    var ingredientInputs = document.getElementById("ingredientInputs");
    var newIngredient = document.createElement("div");
    newIngredient.classList.add("ingredient");

    newIngredient.innerHTML = `
        <input type="text" placeholder="Ingredient name" class="ingredient-name">
        <input type="number" placeholder="Calories" class="ingredient-calories">
        <input type="number" placeholder="Protein (g)" class="ingredient-protein">
        <input type="number" placeholder="Carbohydrates (g)" class="ingredient-carbs">
        <input type="number" placeholder="Fat (g)" class="ingredient-fat">
    `;

    ingredientInputs.appendChild(newIngredient);
}
