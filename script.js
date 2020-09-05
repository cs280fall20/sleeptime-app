let root = document.getElementById("root");

let p = document.createElement("p");
p.innerText = "If you go to bed NOW, you should wake up at...";
root.append(p);

let zzz = document.createElement("button");
zzz.innerText = "zzz";
root.append(zzz);

let output = document.createElement("div");
output.className = "output";
root.append(output);

output.innerHTML = `
<p>It takes the average human fourteen minutes to fall asleep.</p>
<p>If you head to bed right now, you should try to wake up at one of the following times:</p>
<p id="hours">11:44 PM or 1:14 AM or 2:44 AM or 4:14 AM or 5:44 AM or 7:14 AM</p>
<p>A good night's sleep consists of 5-6 complete sleep cycles.</p>`;