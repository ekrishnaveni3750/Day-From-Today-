function calculateDay() {
    let days = document.getElementById("days").value;
    let result = document.getElementById("result");

    if (days === "") {
        result.innerText = "Please enter number of days";
        return;
    }

    let today = new Date();
    let futureDate = new Date(today);
    futureDate.setDate(today.getDate() + parseInt(days));

    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    result.innerText =
        "The day will be: " +
        futureDate.toLocaleDateString("en-US", options);
}