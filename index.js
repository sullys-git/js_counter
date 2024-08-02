const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const countDisplay = document.getElementById("count-display")
const previousEntriesDisplay = document.getElementById("previous-entries-display")

let count = 0
let previousEntries = []
let previousEntriesText = "Previous Entries: "

incrementBtn.addEventListener("click", function() {
    count ++
    countDisplay.textContent = count;
})

saveBtn.addEventListener("click", function() {
    previousEntries.push(count)
    previousEntriesDisplay.textContent = previousEntriesText

    for ( let i = 0; i < previousEntries.length; i ++ ) {
        previousEntriesDisplay.textContent +=`${previousEntries[i]} - `
    }

    console.log(previousEntries)
    count = 0
})