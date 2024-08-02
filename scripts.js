// Display a welcome message to the user
let welcomeEl = document.getElementById("welcome-el");
let greeting = "Welcome!"
welcomeEl.textContent = `${greeting} 👏`;

// document.getElementById("count-el").innerText = 5;
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

incrementBtn.addEventListener("click", function () {
    count += 1;
    countEl.textContent = count;
});

saveBtn.addEventListener("click", function() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;

});


