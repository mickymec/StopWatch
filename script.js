// --------------------------------------------------------------
// DOM ELEMENT ACCESS 
// --------------------------------------------------------------
// EXPAND BTN 
const expandBtn = document.querySelector("[data-expand]");
// TIMER WRAPPER 
const wrapper = document.querySelector("[data-wrapper]");
const overlay = document.querySelector("[data-overlay]");
// BUTTONS FOR TIMER
const playPauseBtn = document.querySelector("[data-play-pause]");
const markBtn = document.querySelector("[data-mark]");
const resetBtn = document.querySelector("[data-reset]");
// PLAY PAUSE ICON
const playPauseIconBtn = document.querySelector(".play_pause i")
// TIMER CONTAINER 
const timerWrapper = document.querySelectorAll("[data-timer-wrapper]");
const colon = document.querySelectorAll(".colon");
// HOUR, MINUTE, SECOND
const hour = document.querySelector("[data-hour]");
const minute = document.querySelector("[data-minute]");
const second = document.querySelector("[data-second]");
// MARK CONTAINER
const markContainer = document.querySelector('[data-mark-section]');
const markLaps = document.querySelector("[data-laps]");
const markTime = document.querySelector("[data-time]");
const ulTags = document.querySelector("[data-mark-list]");



// --------------------------------------------------------------
//CUSTOM VARIABLE SECTION 
// --------------------------------------------------------------
// VARIABLE FOR VALUE INCREMENT
let hourIncre = 0, minuteIncre = 0, secondIncre = 0;
// VARIABLE FOR INTERVAL
let secondInterval;
// VARIABLE FOR LAPS INCREMENT
let laps = 0;
// VARIABLE FOR STORE TIME IN MARK TIME 
let markHour, markMinute, markSecond;


// --------------------------------------------------------------
// EXPAND BTN ADD EVENT 
// --------------------------------------------------------------
expandBtn.addEventListener("click", () => {

    // EXPAND BTN
    expandBtn.classList.toggle("active");

    // WRAPPER POSITION
    wrapper.classList.toggle("active");

    // OVERLAY ACTIVE
    overlay.classList.toggle("active");

});





// --------------------------------------------------------------
// TIMER CODE
// --------------------------------------------------------------




// FUNCTION FOR PLAY PAUSE
function playPuse() {

    // --------------------------------------------------------------
    // FOR RESET BTN REMOVE DEACTIVE CLASS
    // --------------------------------------------------------------
    resetBtn.classList.remove("deactive")

    // --------------------------------------------------------------
    // SET-INTERVAL QUERY
    // --------------------------------------------------------------

    if (playPauseIconBtn.classList.contains("bx-play")) {

        // SECOND INTERVAL
        // --------------------------------------------------------------
        secondInterval = setInterval(() => {

            // INCREMEMT VALUE
            secondIncre++;

            // MINUTE SECTION 
            // --------------------------------------------------------------
            if (secondIncre == 60) {

                // MINUTE INCREMENT
                minuteIncre++;

                // CONDITION FOR HOUR INCREMENT 
                // --------------------------------------------------------------
                if (minuteIncre == 60) {
                    hourIncre++;
                }

                // --------------------------------------------------------------
                if (minuteIncre > 59) {
                    minuteIncre = 0;
                }

                // ADD VALUE IN HTML
                if (minuteIncre < 10) {
                    minute.innerText = '0' + minuteIncre;
                } else {
                    minute.innerText = minuteIncre;
                }

                // STORE MINUTE VALUE IN MARK MINUTE VARIABLE
                if (minuteIncre < 10) {
                    markMinute = '0' + minuteIncre;
                } else {
                    markMinute = minuteIncre;
                }

            }

            // --------------------------------------------------------------
            // HOUR SECTION
            // --------------------------------------------------------------
            if (hourIncre > 59) {
                hourIncre = 0;
            }

            // ADD VALUE IN HTML
            if (hourIncre < 10) {
                hour.innerText = '0' + hourIncre;
            } else {
                hour.innerText = hourIncre;
            }

            // STORE HOUR VALUE IN MARK HOUR VARIABLE
            if (hourIncre < 10) {
                markHour = '0' + hourIncre;
            } else {
                markHour = hourIncre;
            }

            // --------------------------------------------------------------
            if (secondIncre > 59) {
                secondIncre = 0;
            }
            // ADD VALUE IN HTML
            if (secondIncre < 10) {
                second.innerText = '0' + secondIncre;
            } else {
                second.innerText = secondIncre;
            }

            // STORE MINUTE VALUE IN MARK MINUTE VARIABLE
            if (secondIncre < 10) {
                markSecond = '0' + secondIncre;
            } else {
                markSecond = secondIncre;
            }

        }, 1000);





    } else if (playPauseIconBtn.classList.contains("bx-pause")) {
        clearInterval(secondInterval);
    }



    // --------------------------------------------------------------
    // PLAY PAUSE ICON CHANGE 
    // --------------------------------------------------------------
    if (playPauseIconBtn.classList.contains("bx-play")) {
        playPauseIconBtn.classList.remove("bx-play");
        playPauseIconBtn.classList.add("bx-pause");
    } else {
        playPauseIconBtn.classList.add("bx-play");
        playPauseIconBtn.classList.remove("bx-pause");
    }


    // MARK BUTTON ACTIVE
    // --------------------------------------------------------------
    if (playPauseIconBtn.classList.contains("bx-play")) {
        markBtn.classList.remove("active");
    } else if (playPauseIconBtn.classList.contains("bx-pause")) {
        markBtn.classList.add("active");
    }


    // TIMER COLOR CHANGE
    // --------------------------------------------------------------
    if (playPauseIconBtn.classList.contains("bx-play")) {
        for (let i = 0; i < timerWrapper.length; i++) {
            timerWrapper[i].style.color = '#999';
        }
        colon[0].style.color = '#999';
        colon[1].style.color = '#999';
    } else if (playPauseIconBtn.classList.contains("bx-pause")) {
        for (let i = 0; i < timerWrapper.length; i++) {
            timerWrapper[i].style.color = '#ffffff';
        }
        colon[0].style.color = '#fff';
        colon[1].style.color = '#fff';
    }

}

// FUNCTION FOR RESET BUTTON
// --------------------------------------------------------------
function resetAll() {
    // RESET ALL VALUE
    // --------------------------------------------------------------

    // RESET ALL HTML TIMER VALUE
    hour.innerText = '00';
    minute.innerText = '00';
    second.innerText = '00';

    // RESET ALL INCREMENT VRIABLE VALUE
    hourIncre = 0;
    minuteIncre = 0;
    secondIncre = 0;

    // STOP INTERVAL
    clearInterval(secondInterval);

    // RESET PLAY-PAUSE ICON
    if (playPauseIconBtn.classList.contains("bx-pause")) {
        playPauseIconBtn.classList.remove("bx-pause");
        playPauseIconBtn.classList.add("bx-play");
    }

    // DEACTIVE MARK BUTTON
    markBtn.classList.remove("active");

    // DEACTIVE MARK CONTAINER
    markContainer.classList.remove("active");

    // REMOVE ALL MARK LIST IN UL TAGS
    ulTags.innerHTML = ' ';
    laps = 0;

    // ADD DEACTIVE CLASS
    resetBtn.classList.add("deactive");
}


// FUNCTION FOR MARK BUTTON
// --------------------------------------------------------------
function markList() {
    // LAPS VALUE INCREMENET
    laps++;

    // IF VALUE IS UNDEFINED THAN VALUE IS '00'
    if (markHour == undefined) {
        markHour = '00';
    }
    if (markMinute == undefined) {
        markMinute = '00';
    }
    if (markSecond == undefined) {
        markSecond = '00';
    }

    // ACTIVE MARK CONTAINER
    markContainer.classList.add("active");

    // CREATE LIST OR MARK INSIDE UL TAG
    const liTags = `<li>
                    <div class="mark_data" data-laps>${laps}</div>
                    <div class="mark_data" data-time>${markHour} : ${markMinute} : ${markSecond}</div>
                    </li>`
    // ADD LI QUERY INSIDE UL TAG                 
    ulTags.insertAdjacentHTML("afterbegin", liTags);

}




// BUTTON ADD EVENT LISTENER
// --------------------------------------------------------------
playPauseBtn.addEventListener("click", () => playPuse());
resetBtn.addEventListener("click", () => resetAll());
markBtn.addEventListener("click", () => markList());
