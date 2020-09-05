let root = document.getElementById("root");

let p = document.createElement("p");
p.innerText = "If you go to bed NOW, you should wake up at...";
root.append(p);

let zzz = document.createElement("button");
zzz.innerText = "zzz";
zzz.addEventListener("click", zzzOnClick);
root.append(zzz);

let output = document.createElement("div");
output.className = "output";
root.append(output);

output.innerHTML = `
<p>It takes the average human fourteen minutes to fall asleep.</p>
<p>If you head to bed right now, you should try to wake up at one of the following times:</p>
<p id="hours">11:44 PM or 1:14 AM or 2:44 AM or 4:14 AM or 5:44 AM or 7:14 AM</p>
<p>A good night's sleep consists of 5-6 complete sleep cycles.</p>`;


function zzzOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block";
    let hours = document.querySelector("#hours");
    hours.innerText = ""; // cleanup existing content

    // get current time
    let now = Date.now(); // in milliseconds
    let minute = 60 * 1000;  // milliseconds
    let cycle = now;

    // allow 14 minutes to fall sleep
    cycle += 14 * minute;

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