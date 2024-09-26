function calculateDailyCaloriesBurned() {
    var age = parseInt(document.getElementById("age").value);
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var activityLevel = document.getElementById("activityLevel").value;

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Please enter valid age, weight, and height.");
        return;
    }

    var basalMetabolicRate = calculateBMR(gender, weight, height, age);
    var dailyCaloriesBurned = calculateDailyCalories(basalMetabolicRate, activityLevel);

    document.getElementById("result").innerHTML = "Your estimated daily calories burned is approximately " + dailyCaloriesBurned.toFixed(0) + " calories.";
}

function calculateBMR(gender, weight, height, age) {
    // Example BMR calculation (you can replace this with actual calculations)
    var bmr = (gender === 'male') ? 10 * weight + 6.25 * height - 5 * age + 5 : 10 * weight + 6.25 * height - 5 * age - 161;
    return bmr;
}

function calculateDailyCalories(basalMetabolicRate, activityLevel) {
    // Example calculation based on activity level (you can replace this with actual calculations)
    var activityFactors = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
    };

    return basalMetabolicRate * activityFactors[activityLevel];
}
