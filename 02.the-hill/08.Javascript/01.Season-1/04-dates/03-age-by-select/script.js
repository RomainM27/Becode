
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // dob-day;
    // dob-month;
    // dob-year;
    // your code here
    const btn = document.getElementById("run");
    const day = document.getElementById("dob-day")
    const month = document.getElementById("dob-month")
    const year = document.getElementById("dob-year")

    btn.addEventListener("click", () =>
    alert(day.value+ '/'+
        month.value+ '/'+
        year.value)
    );
})();

