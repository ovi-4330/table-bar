
// ======================
// SELECT ELEMENTS
// ======================

const numberInput = document.querySelector("#number");

const generateBtn = document.querySelector("#generateBtn");

const overlay = document.querySelector("#overlay");

const popup = document.querySelector(".popup");

const closeBtn = document.querySelector("#closeBtn");

const result = document.querySelector("#result");

const error = document.querySelector("#error");

const tableInfo = document.querySelector("#tableInfo");


// ======================
// GENERATE TABLE
// ======================

function generateTable() {

    const number = Number(numberInput.value);


    // VALIDATION

    if (
        numberInput.value.trim() === "" ||
        !Number.isInteger(number) ||
        number < 1 ||
        number > 100
    ) {

        error.textContent = "Enter a number between 1 and 100!";

        return;

    }


    error.textContent = "";


    // CLEAR OLD TABLES

    result.innerHTML = "";


    // UPDATE POPUP TITLE

    tableInfo.textContent =
        `Showing multiplication tables from 1 to ${number}`;


    // CREATE TABLE CARDS

    for (let i = 1; i <= number; i++) {

        const table = document.createElement("div");

        table.classList.add("table-box");


        // STAGGER ANIMATION

        const delay = Math.min((i - 1) * 0.08, 1.5);

        table.style.animationDelay = `${delay}s`;


        // HEADING

        const heading = document.createElement("h3");

        heading.textContent = `Table ${i}`;

        table.appendChild(heading);


        // MULTIPLICATION

        for (let j = 1; j <= 10; j++) {

            const p = document.createElement("p");

            p.textContent = `${i} × ${j} = ${i * j}`;

            table.appendChild(p);

        }


        // ADD CARD

        result.appendChild(table);

    }


    // OPEN POPUP

    overlay.classList.add("active");

}


// ======================
// GENERATE BUTTON
// ======================

generateBtn.addEventListener("click", generateTable);


// ======================
// CLOSE POPUP
// ======================

function closePopup() {

    overlay.classList.remove("active");

}

closeBtn.addEventListener("click", closePopup);


// ======================
// CLICK OUTSIDE TO CLOSE
// ======================

overlay.addEventListener("click", function(event) {

    if (event.target === overlay) {

        closePopup();

    }

});


// ======================
// ENTER KEY
// ======================

numberInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        generateTable();

    }

});


// ======================
// ESCAPE KEY
// ======================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePopup();

    }

});
