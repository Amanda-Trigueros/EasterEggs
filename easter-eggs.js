function TicTacToe() {
}

function Loader(frames = ['|', '/', '-', "\\"]) {
    let index = 0
    setInterval(function () {
        if (index >= frames.length) index = 0;
        console.clear();
        console.log(frames[index]);
        index += 1;
    }, 500);
};
    

function Clock() {
}

function numberFormatter() {
}

function EasterEgg() {
}

Loader()