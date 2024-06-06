let btn_click = document.querySelectorAll(".box");
let msgs = document.querySelector(".msg");
let reset = document.querySelector("#game");
let newGame = document.querySelector("#reset-btn");
let clicks = 0;
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetbtn = () => {
    turn0 = true;
    enable_box();
    msgs.classList.add("hide");
    clicks = 0; // Reset the click count
};

const gamebtn = () => {
    turn0 = true;
    enable_box();
    msgs.classList.add("hide");
    clicks = 0; // Reset the click count
};

btn_click.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (turn0 === true) {
            btn.innerHTML = "O";
            btn.style.color = "green";
            turn0 = false;
        } else {
            btn.innerHTML = "X";
            btn.style.color = "red";

            turn0 = true;
        }
        btn.disabled = true;
        clicks++; // Increment click count
        winner();
    });
});

const disable_box = () => {
    for (let b of btn_click) {
        b.disabled = true;
    }
};

const enable_box = () => {
    for (let b of btn_click) {
        b.disabled = false;
        b.innerText = "";
    }
};

const showWinner = (win) => {
    msgs.innerText = `Congratulations! The winner is ${win}`;
    msgs.classList.remove("hide");
    disable_box();
};

const showDraw = () => {
    msgs.innerText = "It's a draw!";
    msgs.classList.remove("hide");
};

const winner = () => {
    for (let pattern of winPattern) {
        let val1 = btn_click[pattern[0]].innerText;
        let val2 = btn_click[pattern[1]].innerText;
        let val3 = btn_click[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                showWinner(val1);
                return; // Exit the function to avoid draw message
            }
        }
    }

    // Check for draw after 9 clicks
    if (clicks === 9) {
        showDraw();
    }
};

reset.addEventListener("click", resetbtn);
newGame.addEventListener("click", resetbtn);
