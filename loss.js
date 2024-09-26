function calculateCalorieGoal() {
    var currentWeight = parseFloat(document.getElementById("currentWeight").value);
    var targetWeight = parseFloat(document.getElementById("targetWeight").value);
    var weeks = parseInt(document.getElementById("weeks").value);

    if (isNaN(currentWeight) || isNaN(targetWeight) || isNaN(weeks) || weeks <= 0) {
        alert("Please enter valid current weight, target weight, and number of weeks.");
        return;
    }

    var weightDifference = currentWeight - targetWeight;
    var weeklyCalorieDeficit = weightDifference * 7700 / weeks;

    var calorieGoal = calculateDailyCalorieExpenditure(currentWeight) - weeklyCalorieDeficit;

    document.getElementById("result").innerHTML = "Your daily calorie goal for weight loss is approximately " + calorieGoal.toFixed(0) + " calories.";
}

function calculateDailyCalorieExpenditure(weight) {
    return weight * 24;
}
