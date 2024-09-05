const btn = document.getElementById("evasive-button");
const check = document.getElementById("check");
const confines = document.getElementById("confines");
const coutner = document.getElementById("counter");
let count=0;
btn.addEventListener("click", function() {
    const containerWidth = confines.offsetWidth;
    const containerHeight = confines.offsetHeight;
    const buttonWidth = btn.offsetWidth;
    const buttonHeight = btn.offsetHeight;

    let randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
    let randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));
    count+=1
    check.innerText = randomX + " X " + randomY;
    coutner.innerText = "You've clicked me " + count+" times.";
    moveButton(randomX, randomY);
});

function moveButton(randomX, randomY) {
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}
