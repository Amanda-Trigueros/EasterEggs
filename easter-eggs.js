function TicTacToe() {
}

function Loader() {
    const frames = ['|', '/', '-', "\\"];
    let i = 0;
    if (i < frames.length) {
    setInterval(function () {
        console.clear();
        console.log(frames[i]);
        i += 1;
    }, 500);
    } else {console.clear()}
};
    

function Clock() {
}

function numberFormatter() {
}

function EasterEgg() {
}
