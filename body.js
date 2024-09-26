function calculateBodyFatPercentage() {
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var waist = parseFloat(document.getElementById("waist").value);
    var hip = parseFloat(document.getElementById("hip").value);

    if (isNaN(weight) || isNaN(waist) || isNaN(hip)) {
        alert("Please enter valid weight, waist circumference, and hip circumference.");
        return;
    }

    var bodyFatPercentage = calculateBFPercentage(gender, weight, waist, hip);

    document.getElementById("result").innerHTML = "Your body fat percentage is approximately " + bodyFatPercentage.toFixed(2) + "%.";
}

function calculateBFPercentage(gender, weight, waist, hip) {
    var factorA, factorB, factorC;
    if (gender === "male") {
        factorA = 86.010;
        factorB = 70.041;
        factorC = 30;
    } else if (gender === "female") {
        factorA = 163.205;
        factorB = 97.684;
        factorC = 28;
    } else {
        alert("Invalid gender selection.");
        return null;
    }

    var leanBodyMass = weight - (0.8 * (weight * (factorC / 100)));
    var bodyFatWeight = weight - leanBodyMass;
    var bodyFatPercentage = (bodyFatWeight / weight) * 100;

    return bodyFatPercentage;
}
