function TicTacToe() {
}

function Loader() {
    this.loaderCharacters = ['|', '/', '-', "\\"]
    function load() {
        for (let i=0; i < this.loaderCharacters.length; i++) {
            console.clear();
            return console.log(this.loaderCharacters[i]);
        }
    }
}

function Clock() {
}

function numberFormatter() {
}

function EasterEgg() {
}
