function calculateCaloriesBurned() {
    var activity = document.getElementById("activity").value;
    var duration = parseInt(document.getElementById("duration").value);

    if (isNaN(duration) || duration <= 0) {
        alert("Please enter a valid duration.");
        return;
    }

    var caloriesBurned = calculateCalories(activity, duration);

    document.getElementById("result").innerHTML = "You burned approximately " + caloriesBurned.toFixed(2) + " calories.";
}

function calculateCalories(activity, duration) {
    // Example calorie calculation based on activity and duration (you can replace this with actual calculations)
    var caloriesPerMinute = 10; // Example value
    return caloriesPerMinute * duration;
}
