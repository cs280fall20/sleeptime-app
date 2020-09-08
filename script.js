function calcOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let hours = document.querySelector("#hours");
    hours.innerText = ""; // cleanup existing content

    // get current time
    let hh = document.getElementById("hh").value;
    let mm = document.getElementById("mm").value;
    let ampm = document.getElementById("ampm").value;
    // hh = ampm === "PM" ? hh + 12 : hh; // bug!
    hh = ampm === "PM" ? Number.parseInt(hh) + 12 : hh;
    let now = new Date();
    now.setHours(hh);
    now.setMinutes(mm);
    now = now.valueOf();

    let minute = 60 * 1000;  // milliseconds
    let cycle = now;

    // calculate 6 sleep cycles (each 90 minutes)
    for(let i = 0; i < 6; i++) {
        cycle += 90 * minute;

        // append the sleep cycles to hours string
        let span = document.createElement("span");
        span.id = "cycle-" + (i + 1);
        span.innerText = new Date(cycle).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        hours.appendChild(span);

        if (i < 5) {
            let or = document.createTextNode(" OR ");
            hours.appendChild(or);
        }
    }
}
